import { Component, OnInit, ViewChild } from '@angular/core';
import _ from 'lodash';
import { LocalStorageService } from 'angular-2-local-storage';
import * as moment from 'moment';

import { MessageService, SearchService } from '../../../../../service';
import { UserService } from '../../../../user/user.service';
import { BroadcastService } from '../../../../../shared/services/broadcast.service';

@Component({
    selector: 'create-message-modal',
    templateUrl: './create-message-modal.html',
    styleUrls: ['./create-message-modal.scss','./../../messages/messages.scss']
})
export class CreateMessageModalComponent implements OnInit {
    @ViewChild('createMessageModal') public createMessageModal: any;

    messagesChangeEvent: any = "messages_change"
    currentDate = new Date();
    user: any;

    isTopMenu= false;
    modalType = 'list';
    messages = [];
    filteredUsers = [];

    recipientModel: any = {};
    messageModel: any = {};


    constructor(private messageService: MessageService, private localStorageService: LocalStorageService,
        private userService: UserService,
        private searchService: SearchService,
        private broadcastService: BroadcastService) {
        this.user = this.localStorageService.get('user');        
    }
    
    ngOnInit(): void {

    }


    getMessages(threadId) {
        this.messageService.get(threadId).subscribe((res) => {            
            this.recipientModel.messages = res.data.messages;
            this.populateRecipientThread(this.recipientModel);
        })
    }

    populateRecipientThread(recipientModel) {
        var messages = [];
        if (recipientModel.messages && recipientModel.messages.length > 0) {
            _.each(_.sortBy(recipientModel.messages, 'createdAt'), (msg) => {
                var message = {
                    text: msg.text,
                    createdAt: msg.createdAt,
                    updatedAt: msg.updatedAt,
                    author: msg.author,
                    isCurrentUserAuthor: msg.author._id == this.user._id
                };
                messages.push(message);
            });
        }
        this.recipientModel = recipientModel;
        this.recipientModel.messages = messages;
        
        let lastMessageDate = moment(this.recipientModel.messages.length > 0 ? _.last(this.recipientModel.messages).createdAt : this.currentDate);
        this.recipientModel.lastMessageCreatedAt = lastMessageDate.isSame(this.currentDate, "day") ? 'TODAY ' + lastMessageDate.format('h:mmA') : lastMessageDate.format('MM-DD-YYYY h:mmA');
    }

    createMessage() {
        if (!this.messageModel.text)
            return false;

        var model = {
            text: this.messageModel.text,
            contentType: "ContentTypeText",
            recipients: [this.recipientModel.username]
        };
        this.messageModel.text = '';

        this.messageService.post(model, this.recipientModel.threadId).subscribe((res) => {
            
            if (!this.recipientModel.threadId)
                this.recipientModel.threadId = res.data._id;

            this.getMessages(this.recipientModel.threadId);
            this.populateMessageList();
            
            this.broadcastService.broadcast(this.messagesChangeEvent);

        }, (err) => {
            console.log('err', err);
        });
    }

    populateMessageList()
    {
        
        this.messageService.get().subscribe((res) => {
            this.messages = [];            
            _.each(res.data, (m) => {                
                _.each(_.reject(m.recipients, { 'username': this.user.username }), (r) => {
                    if (m.messages.length > 0) {
                        this.userService.getUser(r._id).subscribe((user) => {
                            var userAvatar = _.filter(user.media, { displayType: 'avatar' });

                            var lastMessage = _.sortBy(m.messages, 'createdAt').reverse()[0];

                            var message = {
                                username: r.username,
                                nickname: r.nickname,
                                avatar: userAvatar.length > 0 ? userAvatar[0].link : user.profileImageThumbnail,
                                phone: user.phone,
                                messages: m.messages,
                                threadId: m._id,
                                isRead: m.readBy && m.readBy.indexOf(this.user.id) != -1,
                                lastMessageCreatedAt: lastMessage.createdAt,
                                lastMessageText: lastMessage.text
                            }
                            this.messages.push(message);
                        });
                    }
                });
            });            
        })
    }

    searchContacts(term = undefined) {
        if (!term)
            term = 'a';


        this.searchService.search('user', term).subscribe((users) => {
            var _users:any = [];
            _.each(users, (usr) => {
                var userAvatar = _.filter(usr.media, { displayType: 'avatar' });   
                var user = {
                    id:usr._id,
                    username: usr.username,
                    nickname: usr.nickname,
                    avatar: userAvatar.length > 0 ? userAvatar[0].link : usr.profileImageThumbnail,
                }
                _users.push(user);
            });
            this.filteredUsers = _users;            
        });
    }

    selectContact(user) {
        this.modalType = 'direct';

        var thread = _.filter(this.messages, { 'username': user.username });        
        var threadId = thread.length > 0 ? thread[0].threadId : undefined;

        var model = {
            username: user.username,
            avatar: user.avatar,
            threadId: threadId
        };
        this.populateRecipientThread(model);

        if (threadId)
            this.getMessages(threadId);
    }

    selectThread(thread)
    {
        this.modalType = 'direct';        
        this.populateRecipientThread(thread);
    }


    changeModalType(type, model = undefined) {
        this.modalType = type;
        switch (this.modalType) {
            case 'direct':
                if (model)
                this.populateRecipientThread(model);
                break;
            case 'find':
                //this.searchContacts();
                break;
            default:
                //this.populateMessageList();
                break;
        }  
    }

    // general functions
    show(recipientModel, modalType, isTopMenu = undefined) {
        this.createMessageModal.show();
        this.isTopMenu = isTopMenu;      
        this.changeModalType(modalType, recipientModel);        
        this.populateMessageList();
        this.searchContacts();
    }

    hide() {
        this.createMessageModal.hide();
    }

    
}