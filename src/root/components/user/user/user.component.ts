import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import _ from 'lodash';

import { UserService } from '../user.service'

@Component({
	selector: 'user',
	templateUrl: './user.html',
	styleUrls: ['./user.scss']
})
export class UserComponent implements OnInit {
    user: any = [];


    constructor(private localStorageService: LocalStorageService, private router: Router) {
        this.user = localStorageService.get('user');
        var userAvatar = _.filter(this.user.media, { displayType: 'avatar' });                
        this.user.avatar = userAvatar.length > 0 ? userAvatar[0].link : (this.user.profileImageThumbnail! ? this.user.profileImageThumbnail :'assets/images/img/avatar.png');        
    }

    ngOnInit(): void {

    }

    myProfile() {        
        this.router.navigateByUrl('profile');
    }
}