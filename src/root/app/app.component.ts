import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

import { UserService } from "../components/user/user.service";
import { AuthService } from "../components/auth/auth.service";

import { BroadcastService } from '../shared/services/broadcast.service';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
	selector: 'app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	user: any;
    isLoading: boolean;
	guest: boolean;
    copyrightDate: number;    
    userStateChangeEvent: any = 'user_state_change';
    


	constructor(private userService: UserService,
				private authService: AuthService,
                private broadcastService: BroadcastService,
                private localStorageService: LocalStorageService,
                public router: Router) {
        
        
        broadcastService.on(this.userStateChangeEvent).subscribe((res) => {
            this.user = this.localStorageService.get('user');        
        });

       
        this.broadcastService.loaderStatus.subscribe((val: boolean) => {
            setTimeout(() => this.isLoading = val, 0);
        });
	}

	ngOnInit(): void {		
		this.copyrightDate = new Date().getFullYear();
        this.user = this.localStorageService.get('user');    

	}

    logout(event) {        
		this.authService.logout();
	}

}