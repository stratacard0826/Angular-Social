import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { ApiGateway } from './api-gateway.constant';
import { AuthService } from '../components/auth/auth.service';
import { BroadcastService } from './../shared/services/broadcast.service';

@Injectable()
export class FeedService {
    
    constructor(private http: Http, private authService: AuthService,
        private broadcastService: BroadcastService) {
        
	}


    getFeeds() {
        return this.http.get(ApiGateway.feeds)
            .map((res: Response) => {                
                return res.json().data.feeds;                
            });
    }


    getUserFeeds(userId) {                
        return this.http.get(ApiGateway.users + `/${userId}/feeds`)
            .map((res: Response) => {
                return res.json().data.feeds;
            });
    }

    getTrending() {
        return this.http.get(ApiGateway.trending)
            .map((res: Response) => {                
                return res.json().data;                
            });
    }

    getSubscribedFeeds(userId) {
        return this.http.get(ApiGateway.users + `/${userId}/feeds/recent/subscribed`, this.authService.getTokenConfig())
            .map((res: Response) => {
                return res.json().data;
            });
    }


    subscribe(feedIds) {
        return this.http.post(ApiGateway.feeds + `/subscribe`, { feeds: feedIds }, this.authService.getTokenConfig())
            .map((res: Response) => {
                return res.json().data;
            });
    }

    toggleSubscription(feedId) {
        return this.http.post(ApiGateway.feeds + `/${feedId}/toggleSubscription`, {}, this.authService.getTokenConfig())
            .map((res: Response) => {
                return res.json().data;
            });
    }


}