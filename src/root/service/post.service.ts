
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { ApiGateway } from './api-gateway.constant';
import { AuthService } from '../components/auth/auth.service';


@Injectable()
export class PostService {

    constructor(private http: Http,
        private authService: AuthService) {
        
	}

    getPosts() {
        return this.http.get(ApiGateway.posts)
            .map((res: Response) => {
                return res.json().data;
            });
    }

    post(model) {
        return this.http.post(ApiGateway.posts, model, this.authService.getTokenConfig()).map((res: Response) => {
            return res.json().data;
        });
    }

    likePost(id) {
        return this.http.put(ApiGateway.posts + `/${id}/like`, {}, this.authService.getTokenConfig()).map((res: Response) => {
            return res.json().data;
        });
    }

    dislikePost(id) {
        return this.http.put(ApiGateway.posts + `/${id}/dislike`, {}, this.authService.getTokenConfig()).map((res: Response) => {
            return res.json().data;
        });
    }

    deletePost(id) {
        return this.http.delete(ApiGateway.posts + `/${id}`, this.authService.getTokenConfig()).map((res: Response) => {
            return res.json().data;
        });
    }

    // get replies
    getReplies(id) {
        return this.http.get(ApiGateway.posts+`/${id}/replies`)
            .map((res: Response) => {
                return res.json().data;
            });
    }

}