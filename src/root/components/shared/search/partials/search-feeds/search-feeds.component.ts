import { Component, OnInit, Input } from '@angular/core';
import _ from 'lodash';
import { LocalStorageService } from 'angular-2-local-storage';

import { SearchService, FeedService } from './../../../../../service';
import { UserService } from '../../../../user/user.service';


@Component({
    selector: 'search-feeds',
    templateUrl: './search-feeds.html',
    styleUrls: ['./search-feeds.scss','./../../search/search.scss']
})

export class SearchFeedsComponent {    
    @Input() term = "";

    user: any;
    feedList = [];
    trendingList = [];    
    isLoading = false;

    constructor(private searchService: SearchService, private feedService: FeedService,
        private localStorageService: LocalStorageService,
        private userService: UserService) {
        this.getTrending();
        this.user = this.localStorageService.get('user');
    }

    ngOnChanges(changes) {
        this.searchFeeds(changes.term.currentValue);       
    }

    searchFeeds(term = undefined) {
        this.isLoading = true;

        this.searchService.search('feed', term).subscribe((res) => {
            this.isLoading = false;
            this.feedList = [];            
            var res = _.take(_.sortBy(res, 'numSubscriptions').reverse(), 3);
            _.each(res, (feed) => {
                var userAvatar = _.filter(feed.media, { displayType: 'avatar' });                
                var isSubscribed = _.filter(this.user.feeds, { _id: feed._id }).length > 0;

                var _feed = {
                    id: feed._id,
                    name: feed.name,
                    numSubscriptions: feed.numSubscriptions,
                    username: feed.author.username,
                    avatar: feed.mediaFileThumbnail ? feed.mediaFileThumbnail : (userAvatar.length > 0 ? userAvatar[0].link : ''),
                    isSubscribed: isSubscribed
                }
                this.feedList.push(_feed);
            })
                        
        });
    }

    getTrending() {
        this.feedService.getTrending().subscribe((res) => {
            this.trendingList = [];
            var res = _.take(_.sortBy(res, 'numSubscriptions').reverse(), 3);
            _.each(res, (feed) => {
                console.log(feed);
                var userAvatar = _.filter(feed.media, { displayType: 'avatar' });
                var _feed = {
                    name: feed.name,
                    numSubscriptions: feed.numSubscriptions,
                    username: feed.author.username,
                    avatar: feed.mediaFile ? feed.mediaFile: (userAvatar.length > 0 ? userAvatar[0].link:'') 
                }
                this.trendingList.push(_feed);
            });
        });
    }

    toggleSubscription(feed) {
        feed.isSubscribed = !feed.isSubscribed;
        this.feedService.toggleSubscription(feed.id).subscribe((res) => {
            this.userService.getSubscribedFeeds(this.user.id).subscribe((feeds) => {
                this.user.feeds = feeds;
                this.localStorageService.set('user', this.user);
            });
        });
    }
}