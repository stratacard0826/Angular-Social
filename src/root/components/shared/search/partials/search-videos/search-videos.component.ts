import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from './../../../../../service';


@Component({
    selector: 'search-videos',
    templateUrl: './search-videos.html',
    styleUrls: ['./search-videos.scss','./../../search/search.scss']
})

export class SearchVideosComponent {    
    videoList = [];
    @Input() term = "";
    isLoading = false;

    constructor(private searchService: SearchService) {


    }

    ngOnChanges(changes) {
        this.search(changes.term.currentValue);
    }

    search(term = undefined) {
        if (!term)
            term = "a";

        this.isLoading = true;
        this.searchService.search('video', term).subscribe((res) => {
            this.isLoading = false;
            this.videoList = res;
        });
    }

}