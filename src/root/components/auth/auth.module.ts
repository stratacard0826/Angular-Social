import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

import { SharedModule } from '../../shared/shared.module';
import { AuthComponent } from './auth/auth.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthService } from './auth.service';

@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		FormsModule,
		SharedModule,		
		NgxIntlTelInputModule
	],
	declarations: [
		AuthComponent,		
		WelcomeComponent
	],
	exports: [
		WelcomeComponent
	],
	providers: [
        AuthService
	]
})
export class AuthModule {

}