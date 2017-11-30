import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { HomeComponent } from './home/home.component';
import { UserModule } from '../user/user.module';
import { FooterModule } from '../footer/footer.module';

import { CreatePostModalComponent } from './partials/create-post/create-post-modal.component';
import { PostModule } from './../shared/post/post.module';
import { SliderModule } from './../shared/slider/slider.module';
import { SearchModule } from './../shared/search/search.module';
import { MessagesModule } from './../shared/messages/messages.module';
import { TrendingModule } from './../shared/trending/trending.module';
import { FeedModule } from './../shared/feed/feed.module';



@NgModule({
    imports: [  
        FormsModule,  
        CommonModule,
        ModalModule,   
		FeedModule,		
		UserModule,
		PostModule,
		SliderModule,
        FooterModule,
        SearchModule,
        MessagesModule,
        TrendingModule
	],
	declarations: [
        HomeComponent,
        CreatePostModalComponent        
	],
	exports: [
        HomeComponent,
        CreatePostModalComponent       
	]
})
export class HomeModule {
	
}