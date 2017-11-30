import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../../../service'
import { BroadcastService } from '../../../../shared/services/broadcast.service';

@Component({
	selector: 'trending',
	templateUrl: './trending.html',
	styleUrls: ['./trending.scss']
})
export class TrendingComponent implements OnInit {
    trending: any = [];
    private searchEvent: any = 'search-feeds';

    constructor(private feedService: FeedService, private broadcastService: BroadcastService) {
        this.getTrending();
    }


    ngOnInit(): void {
		
    }

    getTrending() {
        this.feedService.getTrending().subscribe((res) => {
            this.trending = res;            
        });
    }


    seeAll() {
        this.broadcastService.broadcast(this.searchEvent);
    }
}