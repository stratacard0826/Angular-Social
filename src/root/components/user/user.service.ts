import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { UserAPI } from './user.constant';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class UserService {

    constructor(private http: Http,
        private authService: AuthService) {

    }

    extractUserID(token) {
      let payload = token.split('.')[1];
      payload = window.atob(payload);
      payload = JSON.parse(payload);

      return payload.data;
    }

    getUser(userId) {
      let config,
          credentials = this.getUserAndToken(),
          url = UserAPI.getByID;

      if (credentials) {
        config = {
          headers: {
            Authorization: 'JWT ' + credentials.token
          }
        };

        url = UserAPI.getByID.concat(userId);

        return this.http.get(url, config)
            .map((res: Response) => {
                var user = res.json().data;                
                return user;
          });
      } else {
        return null;
      }
    }

    getUserAndToken() {
      let token = this.authService.getJWT(),
          userAndToken,
          userID;

      if (token) {
        userID = this.extractUserID(token);
        userAndToken = { userID: userID, token: token };
      }

      return userAndToken;
    }

    getSubscribedFeeds(userId) {                
        return this.http.get(UserAPI.getByID + `${userId}/feeds/recent/subscribed`, this.authService.getTokenConfig()).map((res: Response) => {
            return res.json().data;
        });
    }
}