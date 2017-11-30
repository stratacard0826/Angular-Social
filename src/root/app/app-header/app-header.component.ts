import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from '../../components/auth/auth.service';
import { BroadcastService } from './../../shared/services/broadcast.service';

@Component({
	selector: 'app-header',
	templateUrl: './app-header.component.html',
	styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {    
    searchEvent: any ="search-people";
    isContainerFluid: boolean;
    fail: any;
    success: string;    
    credential= { username: '', password: '' };    
    isNotification= false;

    @Input() user: any;
	@Output() onLogout = new EventEmitter();    

    constructor(private authService: AuthService, private router: Router,
        private localStorageService: LocalStorageService,
        private broadcastService: BroadcastService,
        private ngbDropdownConfig: NgbDropdownConfig) {

        ngbDropdownConfig.placement = 'bottom-right';

        this.checkWindowWidth();
        window.addEventListener('resize', this.checkWindowWidth);
	}

    checkWindowWidth = () => {
        this.isContainerFluid = window.innerWidth < 1200 ? true:false;        
    }

    authUser(form) {
        this.broadcastService.displayLoader(true);        
        this.authService.login(this.credential).subscribe((res) => {
            this.broadcastService.displayLoader(false);
        }, (err) => {
            this.broadcastService.displayLoader(false);
            this.fail = err.json().data.message;
            this.isNotification = true;

            setTimeout(() => {
                this.isNotification = false;
                this.fail = '';
            }, 5000);
            });       
    }

    navigate(url) {
        this.router.navigateByUrl(`/${url}`);
    }

    onSearch() {        
            this.broadcastService.broadcast(this.searchEvent);
    }

	logout() {
		this.onLogout.emit({
		    logout: true
		});
    }

}