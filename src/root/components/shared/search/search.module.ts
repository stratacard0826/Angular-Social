import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MomentModule } from 'angular2-moment/moment.module';
import { FormsModule } from '@angular/forms';

import {
    SearchComponent, SearchPeopleComponent, SearchPostsComponent,
    SearchFeedsComponent, SearchVideosComponent, SearchstreamsComponent
} from './';


@NgModule({
    imports: [
      BrowserModule,
      MomentModule,
      FormsModule
    ],
	declarations: [
        SearchComponent,
        SearchPeopleComponent,
        SearchPostsComponent,
        SearchFeedsComponent,
        SearchVideosComponent,
        SearchstreamsComponent
	],
	exports: [
        SearchComponent,
        SearchPeopleComponent,
        SearchPostsComponent,
        SearchFeedsComponent,
        SearchVideosComponent,
        SearchstreamsComponent
	]
})
export class SearchModule {
	
}