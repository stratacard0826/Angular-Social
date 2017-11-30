import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';

@NgModule({
	imports: [
		HttpModule
	],
	declarations: [
		UserComponent
	],
	providers: [
		UserService
	],
	exports: [
		UserComponent
	]
})
export class UserModule {

}