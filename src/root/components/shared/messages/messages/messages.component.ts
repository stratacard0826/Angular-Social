import { Component, OnInit, ViewChild } from '@angular/core';
import _ from 'lodash';

import { LocalStorageService } from 'angular-2-local-storage';
import { MessageService } from '../../../../service'
import { UserService } from '../../../user/user.service';
import { BroadcastService } from './../../../../shared/services/broadcast.service';

import { CreateMessageModalComponent } from '../';

@Component({
	selector: 'messages',
	templateUrl: './messages.html',
	styleUrls: ['./messages.scss']
})
export class MessagesComponent implements OnInit {

    messagesChangeEvent: any = "messages_change"
    messages: any = [];
    filteredMessages: any = [];
    user: any;

    @ViewChild('createMessageModal') createMessageModal: CreateMessageModalComponent;

    constructor(private localStorageService: LocalStorageService,
        private messageService: MessageService,
        private userService: UserService,
        private broadcastService: BroadcastService) {

        this.user = this.localStorageService.get('user');        
        this.getMessages();


        broadcastService.on(this.messagesChangeEvent).subscribe(res => {
            this.getMessages();
        });
    }

    ngOnInit(): void {

    }

    getMessages() {

        this.messageService.get().subscribe((res) => {                                    
            this.messages = [];
            _.each(res.data, (m) => {               
                _.each(_.reject(m.recipients, { 'username': this.user.username }), (r) => {                    
                    this.userService.getUser(r._id).subscribe((user) => {
                        var userAvatar = _.filter(user.media, { displayType: 'avatar' });                        

                        var message = {
                        username: r.username,
                        nickname: r.nickname,                        
                        avatar: userAvatar.length > 0 ? userAvatar[0].link : (user.profileImageThumbnail ? user.profileImageThumbnail:'/assets/images/img/profile01.png'),
                        phone: user.phone,
                        messages: m.messages,
                        threadId:m._id
                    }
                    this.messages.push(message);
                    });
                });
            });
            this.filteredMessages = this.messages;
        });
    }

    filterMessages(value) {
        if (!value)
            this.filteredMessages = this.messages;

        else
            this.filteredMessages = Object.assign([], this.messages).filter(
                feed => feed.nickname.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
                    (feed.phone && feed.phone.toLowerCase().indexOf(value.toLowerCase()) > -1)
            );
    }

    sendMessage() {
        var message = {
            contentType: 'ContentTypeText',
            recipients: ["sonny"],
            text: "Hey, Where are you?",
            media: []
        };
        this.messageService.post(message).subscribe((res) => {
            this.messages = res;            
        });
    }



}