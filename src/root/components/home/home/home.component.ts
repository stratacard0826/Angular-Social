import { Component, OnInit, ViewChild, NgModule, ViewContainerRef } from '@angular/core';

import { CreatePostModalComponent } from './../partials/create-post/create-post-modal.component';
import { BroadcastService } from './../../../shared/services/broadcast.service';

@Component({
	selector: 'home',
	templateUrl: './home.html',
	styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
    @ViewChild('createPostModal') createPostModal: CreatePostModalComponent;        
    isContainerFluid: boolean;    
    isSearch = false;
    searchType: string ='people';

    constructor(private broadcastService: BroadcastService)
    {        
        broadcastService.onAny().subscribe(eventName => {
            
            switch (eventName.toString())
            {
                case 'search-people':
                    this.isSearch = !this.isSearch;
                    this.searchType = 'people';
                    break;
                case 'search-posts':
                    this.isSearch = true;
                    this.searchType = 'posts';
                    break;
                case 'search-feeds':
                    this.isSearch = true;
                    this.searchType = 'feeds';
                    break;
                case 'search-videos':
                    this.isSearch = true;
                    this.searchType = 'videos';
                    break;
                case 'search-streams':
                    this.isSearch = true;
                    this.searchType = 'streams';
                    break;
                case 'post_change':
                    this.isSearch = false
                    break;
                default: break;
            }
            
        });

        this.checkWindowWidth();
        window.addEventListener('resize', this.checkWindowWidth);
    }

    ngOnInit(): void {

    }

    checkWindowWidth = () => {
        this.isContainerFluid = window.innerWidth < 1200 ? true : false;
    }

    
}