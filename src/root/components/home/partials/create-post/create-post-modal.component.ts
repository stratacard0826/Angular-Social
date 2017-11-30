import { Component, OnInit, ViewChild } from '@angular/core';
import _ from 'lodash';

import { PostService, FirebaseService } from './../../../../service';
import { BroadcastService } from  './../../../../shared/services/broadcast.service';


@Component({
	selector: 'create-post-modal',
    templateUrl: './create-post-modal.html',
    styleUrls: ['./create-post-modal.scss']
})
export class CreatePostModalComponent {
    @ViewChild('createPostModal') public createPostModal: any;
    postModel: any = {};    
    postChangeEvent: any = "post_change";


    private mediaArray = [];
    private displayType="original";

    constructor(private postService: PostService, private broadcastService: BroadcastService, private firebaseService: FirebaseService) {

    }   


    createPost() {
        if (!this.postModel.text)
            return false;

        this.broadcastService.displayLoader(true);

        var model = {
            text: this.postModel.text,
            feeds: [],
            contentType: "ContentTypeText",            
            media: this.mediaArray
        };
        this.postService.post(model).subscribe((res) => {
            this.broadcastService.displayLoader(false);
            this.broadcastService.broadcast(this.postChangeEvent);
            this.postModel = {};
            this.mediaArray = [];
            this.hide();
        }, (err) => {
            console.log('err', err);
        });
    }

    fileChange(event, kind) {        
        let fileList: FileList = event.target.files;

        _.each(fileList, (file) => {
            this.broadcastService.displayLoader(true);            
            this.firebaseService.upload(file, kind, this.displayType).then((media) => {
                this.broadcastService.displayLoader(false);
                this.mediaArray.push(media);
            }, (err) => {
                this.broadcastService.displayLoader(false);
            });
        });        
    }



    // general functions
    show() {
        this.createPostModal.show();
    }

    hide() {
        this.createPostModal.hide();
    }

    
}