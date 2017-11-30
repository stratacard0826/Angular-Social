import { Component, EventEmitter, OnInit, ViewChild, Input, Output } from '@angular/core';
import _ from 'lodash';
import { LocalStorageService } from 'angular-2-local-storage';
import * as moment from 'moment';

import { PostService, FirebaseService } from './../../../../../service';
import { BroadcastService } from './../../../../../shared/services/broadcast.service';



@Component({
    selector: 'comments',
    templateUrl: './comments.html',
    styleUrls: ['./comments.scss','./../../post/post.scss']
})
export class CommentsComponent implements OnInit {    
    @Input() thread: any;
    @Output() onSubmit = new EventEmitter();
    
    mediaArray = [];
    displayType = "original";
    user: any;
    comments: any = [];
    commentFormModel: any = {};

    constructor(private postService: PostService, private localStorageService: LocalStorageService,
        private broadcastService: BroadcastService,
        private firebaseService: FirebaseService) {

        this.user = this.localStorageService.get('user');
    }   


    ngOnInit(): void {
        this.loadComments();
    }

    submit() {
        if (!this.commentFormModel.text)
            return false;

        this.broadcastService.displayLoader(true);

        var model = {
            text: this.commentFormModel.text,
            feeds: this.thread.feedIds,
            contentType: "ContentTypeText",
            replyToPost: this.thread.postId,
            media: this.mediaArray
        };

        this.commentFormModel.text = '';

        this.postService.post(model).subscribe((res) => {
            this.broadcastService.displayLoader(false);

            this.loadComments();
            this.mediaArray = [];
            this.onSubmit.emit({ postId: this.thread.postId });            
        });
    }


    loadComments() {
        this.broadcastService.displayLoader(true);
        this.postService.getReplies(this.thread.postId).subscribe((res) => {
            this.broadcastService.displayLoader(false);
            this.comments = [];
            //console.log('comments', res);
                _.each(res, (comment) => {
                    var userAvatar = _.filter(comment.author.media, { displayType: 'avatar' });
                    var _comment = {
                        username: comment.author.username,
                        nickname: comment.author.nickname,
                        avatar: userAvatar.length > 0 ? userAvatar[0].link : (comment.author.profileImageThumbnail ? comment.author.profileImageThumbnail:'/assets/images/img/profile01.png'),
                        text: comment.text,
                        media: comment.media,
                        likes: comment.likes,
                        dislikes: comment.dislikes,
                        numComments: comment.numComments,
                        createdAt: comment.createdAt,
                        updatedAt: comment.updatedAt,
                        postId: comment._id
                    }
                    this.comments.push(_comment);
                });
        });
    }


    fileChange(event, kind) {
        let fileList: FileList = event.target.files;

        _.each(fileList, (file) => {            
            this.broadcastService.displayLoader(true);
            this.firebaseService.upload(file, kind, this.displayType).then((media) => {
                this.mediaArray.push(media);
                this.broadcastService.displayLoader(false);                
            });
        });

    }
}