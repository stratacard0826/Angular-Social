import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TrendingComponent } from './';


@NgModule({
imports:[
BrowserModule,
FormsModule
],
	declarations: [
		TrendingComponent
	],
	exports: [
		TrendingComponent
	]
})
export class TrendingModule {
	
}