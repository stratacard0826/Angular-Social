import { NgModule } from "@angular/core";

import { AuthModule } from "./auth/auth.module";

import { HomeModule } from "./home/home.module";
import { ProfileModule } from "./profile/profile.module";
import { SuggestModule } from "./suggest/suggest.module";

import { UserModule } from "./user/user.module";


@NgModule({
	imports: [		
        HomeModule,
        ProfileModule,		
		SuggestModule,	
		AuthModule,
        UserModule
	],
	declarations: [
	],
	providers: [],
	exports: [		
        HomeModule,
        ProfileModule,        		
		SuggestModule,		
		AuthModule,
        UserModule
	]
})
export class ComponentsModule {
	
}