import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ProfileComponent } from './';
import { UserModule } from '../user/user.module';
import { SearchModule, MessagesModule, TrendingModule, PostModule } from './../shared';


@NgModule({
    imports: [  
        FormsModule,  
        CommonModule,
        ModalModule,   		
		UserModule,
		PostModule,
        SearchModule,
        MessagesModule,
        TrendingModule
	],
    declarations: [
        ProfileComponent                
	],
    exports: [
        ProfileComponent    
	]
})
export class ProfileModule {
	
}