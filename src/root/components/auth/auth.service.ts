import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { LocalStorageService } from 'angular-2-local-storage';
import 'rxjs/add/operator/map';

import { AuthAPI } from './auth.constant';
import { BroadcastService } from '../../shared/services/broadcast.service';


@Injectable()
export class AuthService {	
    userStateChangeEvent: any = 'user_state_change';
    

	constructor(private http: Http,
				private broadcastService: BroadcastService,
				private localStorageService: LocalStorageService,
                private fireAuth: AngularFireAuth,
                private router: Router) {
		
	}

   checkValidity(token): any {
		let payload = token.split('.')[1];
		payload = window.atob(payload);
		payload = JSON.parse(payload);

		token = this.isExpired(payload) ? this.logout() : token;
		return token;
	}

	forgotPassword(user) {
		if (user.email) {
			user.email = user.email.toLowerCase();
		}
		return this.http.post(AuthAPI.forgotPassword, user)
			.map((res: Response) => res);
	}

	getJWT() {
		let token = this.localStorageService.get('token') || null;
		let validToken;

		validToken = token ? this.checkValidity(token) : null;
		return validToken;
	}

    isExpired(payload) {
        return Date.now() / 1000 > payload.exp;
	}

    getTokenConfig():any {
        return {
            headers: {
                Authorization: 'JWT ' + this.getJWT()
            }
        };
    }

	login(user) {
		return this.http.post(AuthAPI.logIn, user)
            .map((res: Response) => {
                var data = res.json().data;                
                return this.fireAuthentication(data.firebaseToken).then((fireRes) => {                    
                    this.setCredentials(data);
                    return res;
                })
			});
	}

	logout() {
        
        this.localStorageService.clearAll();
        this.broadcastService.broadcast(this.userStateChangeEvent);

        this.router.navigateByUrl('/');
	}

	resetPassword(user) {
		return this.http.post(AuthAPI.resetPassword, user)
			.map((res: Response) => {
				this.setCredentials(res.json().data.token);
				return res;
			});
	}

	setCredentials(data) {		
		this.localStorageService.set('token', data.token);
        this.localStorageService.set('user', data.user);                
        this.broadcastService.broadcast(this.userStateChangeEvent);
	}

	signUp(user) {
		// api requires email parameter to be all lowercase
		user.email = user.email.toLowerCase();
		return this.http.post(AuthAPI.signUp, user)
		  .map((res: Response) => res);
	}

	verify(user) {
		// api requires email parameter to be all lowercase
		user.email = user.email.toLowerCase();
		return this.http.post(AuthAPI.verify, user)
			.map((res: Response) => {
				this.setCredentials(res.json().data.token);
			});
    }



    // fire auth

    fireAuthentication(token) {

        return this.fireAuth.auth.signInWithCustomToken(token).then((res) => {        
            this.localStorageService.set('firebase-uid', res.uid);
            return res;
        }, (err) => {
            console.log('fire login err:', err);
        })
    }

    fireSignout() {        
        this.fireAuth.auth.signOut();
    }
}