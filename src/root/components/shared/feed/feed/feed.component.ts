import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import _ from 'lodash';

import { FeedService } from '../../../../service'
import { BroadcastService } from '../../../../shared/services/broadcast.service';
import { UserService } from '../../../user/user.service';

@Component({
	selector: 'feed',
	templateUrl: './feed.html',
	styleUrls: ['./feed.scss']
})
export class FeedComponent implements OnInit {
    private searchEvent:any = 'search-feeds';
    user: any;
    feeds: any = [];
    filteredFeeds: any = [];

    constructor(private feedService: FeedService, private broadcastService: BroadcastService,
        private localStorageService: LocalStorageService,
private userService:UserService) {
        this.getFeeds();

        this.user = this.localStorageService.get('user');
    }

    ngOnInit(): void {

    }

    getFeeds() {
        this.feedService.getFeeds().subscribe((resFeeds) => {

            
            //this.feedService.getSubscribedFeeds(this.user.id).subscribe((resSubscribedFeeds) => {
            //    console.log('resSubscribedFeeds', resSubscribedFeeds);
            //console.log('feeds', this.user.feeds);
                
            resFeeds.forEach((r) => {
                var isSubscribed = _.filter(this.user.feeds, { _id: r._id }).length > 0;
                
               var feed = {
                        id: r._id,
                        username: r.author.username,
                        profileImage: r.author.media.length > 0 ? r.author.media[0].link : r.author.profileImageThumbnail,
                        nickname: r.author.nickname,
                        phone: '',
                        feedName: r.name,
                        description: r.description,
                        media: r.media,
                        numPosts: r.numPosts,
                        createdAt: r.createdAt,
                        updatedAt: r.updatedAt,
                        isSubscribed: isSubscribed
                    }
                    this.feeds.push(feed);
                });
                this.filteredFeeds = this.feeds;
       //     });
        });
    }

    filterFeeds(value) {
        if (!value)
            this.filteredFeeds = this.feeds;

        else
            this.filteredFeeds = Object.assign([], this.feeds).filter(
                feed => feed.feedName.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
                    (feed.phone && feed.phone.toLowerCase().indexOf(value.toLowerCase()) > -1)
            );
    }

    toggleSubscription(feed) {
        feed.isSubscribed = !feed.isSubscribed ;
        this.feedService.toggleSubscription(feed.id).subscribe((res) => {
            this.userService.getSubscribedFeeds(this.user.id).subscribe((feeds) => {
                this.user.feeds = feeds;
                this.localStorageService.set('user', this.user);
            });
        });
    }

    //subscribe(feed) {
    //    feed.isSubscribed = true;
    //    var feedIds = [feed.id];
    //    this.feedService.subscribe(feedIds).subscribe((res) => {
    //        console.log('res', res);
    //        this.getFeeds();
    //    });
    //}

    seeAll() {        
        this.broadcastService.broadcast(this.searchEvent);
    }
}