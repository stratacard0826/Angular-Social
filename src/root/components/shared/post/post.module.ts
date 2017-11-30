import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MomentModule } from 'angular2-moment/moment.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { PostComponent, CommentsComponent } from './';


@NgModule({
    imports: [
      BrowserModule,
      MomentModule,
      FormsModule,
        NgbModule,
        ModalModule,
        InfiniteScrollModule
    ],
	declarations: [
        PostComponent,
        CommentsComponent
	],
	exports: [
        PostComponent,
        CommentsComponent
	]
})
export class PostModule {
	
}