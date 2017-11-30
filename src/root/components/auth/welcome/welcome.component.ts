import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { AuthService } from '../auth.service';
import { BroadcastService } from './../../../shared/services/broadcast.service';

@Component({
	selector: 'welcome',
	templateUrl: './welcome.html',
	styleUrls: ['./welcome.scss']
})
export class WelcomeComponent implements OnInit {
	fail: any;
	formType: string;
	submitType: string;
	success: string;
	user: any;    

    constructor(private authService: AuthService, private localStorageService: LocalStorageService, private broadcastService: BroadcastService) {

	}

	ngOnInit(): void {
		this.fail = '';
        this.formType = 'signUp';
        this.submitType = 'Create Account';
		this.success = '';
        this.user = {};       
	}

    authUser(event) {
        this.broadcastService.displayLoader(true);
        
		let auth = this.authService[this.formType],
			user = JSON.parse(JSON.stringify(event.user));

		auth.bind(this.authService)(user).subscribe(
            res => {
                this.broadcastService.displayLoader(false);
                if (this.formType === 'signUp') {
                    this.success = 'Success! You should receive a verification code shortly.';
                    //this.formType = 'verify';
                }
			},
            err => {             
                try {
                    this.broadcastService.displayLoader(false);                   
                    this.fail = err.json().data.message;                    
                }
                catch (ex) {
                    this.fail = err._body;
                }               
			}
		);
	}

	setFormType(event) {
		this.formType = JSON.parse(JSON.stringify(event.formType));
		this.submitType = JSON.parse(JSON.stringify(event.submitType));
		this.resetComponentState();
	}

	resetComponentState() {
		this.fail = '';
		this.success = '';
		this.user = {};
	}
}