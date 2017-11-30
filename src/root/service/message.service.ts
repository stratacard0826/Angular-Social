import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { LocalStorageService } from 'angular-2-local-storage';
import { ApiGateway } from './api-gateway.constant';
import { AuthService } from '../components/auth/auth.service';
import { BroadcastService } from './../shared/services/broadcast.service';

@Injectable()
export class MessageService {   

    constructor(private http: Http,
        private authService: AuthService,
        private broadcastService: BroadcastService) {        
	}


    get(threadId = undefined) {        
        this.broadcastService.displayLoader(true);
        var url = ApiGateway.messages + (threadId ? `/${threadId}` : '');
        return this.http.get(url, this.authService.getTokenConfig())
            .map((res: Response) => {
                this.broadcastService.displayLoader(false);
                return res.json();
            });
    }

    post(message, threadId = undefined) {                
        this.broadcastService.displayLoader(true);
        var url = ApiGateway.messages + (threadId ? `/${threadId}` : '');
        return this.http.post(url, message, this.authService.getTokenConfig())
            .map((res: Response) => {
                this.broadcastService.displayLoader(false);
                return res.json();
            });
    }



}