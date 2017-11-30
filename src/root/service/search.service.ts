import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { ApiGateway } from './api-gateway.constant';
import { AuthService } from '../components/auth/auth.service';

@Injectable()
export class SearchService {
    
    constructor(private http: Http,
        private authService: AuthService) {
        
	}

    search(searchType, term) {
        if (!term)
            term = "a";

        var model = {
            searchType: searchType,
            term: term
        }
        
        return this.http.post(ApiGateway.search, model, this.authService.getTokenConfig())
            .map((res: Response) => {
                var user = res.json().data;
                return user;
            });
    }


    searchPostsByTag(tag) {        
        return this.http.get(ApiGateway.search+`/posts/tags/${tag}`, this.authService.getTokenConfig())
            .map((res: Response) => {                
                var user = res.json().data;
                return user;
            });
    }


}