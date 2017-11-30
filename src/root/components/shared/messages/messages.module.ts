import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MomentModule } from 'angular2-moment/moment.module';

import { MessagesComponent, CreateMessageModalComponent } from './';

@NgModule({
    imports: [BrowserModule, ModalModule, FormsModule, MomentModule],
	declarations: [
        MessagesComponent,
        CreateMessageModalComponent
	],
	exports: [
        MessagesComponent,
        CreateMessageModalComponent
	]
})
export class MessagesModule {
	
}