import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SliderComponent } from './';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
	declarations: [
		SliderComponent
	],
	exports: [
		SliderComponent
	]
})
export class SliderModule {
	
}