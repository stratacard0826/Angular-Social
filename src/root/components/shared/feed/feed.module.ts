import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FeedComponent } from './feed/feed.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
	declarations: [
		FeedComponent
	],
	exports: [
		FeedComponent
	]
})
export class FeedModule {
	
}