import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { LocalStorageService } from 'angular-2-local-storage';

import { FeedService } from '../../../../service'



@Component({
    selector: 'slider',
    templateUrl: './slider.html',
    styleUrls: ['./slider.scss']
})
export class SliderComponent implements OnInit {    
    feeds: any = [];

    constructor(private feedService: FeedService, private localStorageService: LocalStorageService) {
        this.getUserFeeds();
    }

    ngOnInit(): void {

    }

    getUserFeeds() {
        var _feeds = this.localStorageService.get('user')['feeds'];
        _feeds.forEach((fd) => {
            var userAvatar = _.filter(fd.media, { displayType: 'avatar' });            
            var feed = {
                username: fd.name,
                profileImage: userAvatar.length > 0 ? userAvatar[0].link : fd.profileImageThumbnail,
            }
            this.feeds.push(feed);
        });        
    }

}