import { Component, OnInit, ViewChild, NgModule, ViewContainerRef } from '@angular/core';

import { BroadcastService } from './../../../shared/services/broadcast.service';

@Component({
    selector: 'profile',
    templateUrl: './profile.html',
    styleUrls: ['./profile.scss']
})
export class ProfileComponent implements OnInit {    
    searchEvent:any = "search";
    isSearch = false;

    constructor(private broadcastService: BroadcastService)
    {        
        broadcastService.on(this.searchEvent).subscribe(eventValue => {            
            this.isSearch = !this.isSearch;
        });
    }

    ngOnInit(): void {

    }


    
}