import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';

import { ComponentsModule } from '../components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessagesModule } from './../components/shared/messages/messages.module';

import { AppHeaderComponent } from "./app-header/app-header.component";
import { AppFooterComponent } from "./app-footer/app-footer.component";
import { AppComponent } from "./app.component";
import { AppService } from "./app.service";

@NgModule({
    imports: [
        RouterModule,
		CommonModule,
		ComponentsModule,
        NgbModule,
        FormsModule,
        MessagesModule,
        LoadingModule.forRoot({
            fullScreenBackdrop:true,
            animationType: ANIMATION_TYPES.threeBounce,
            backdropBackgroundColour: 'rgba(0,0,0,0.1)',
            backdropBorderRadius: '4px',
            primaryColour: '#296FAD',
            secondaryColour: '#296FAD',
            tertiaryColour: '#296FAD'
        })    

	],
	declarations: [
		AppHeaderComponent,
		AppFooterComponent,
        AppComponent        
	],
	providers: [ AppService ]
})
export class AppModule {
	
}