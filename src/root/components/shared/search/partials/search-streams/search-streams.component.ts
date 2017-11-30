import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from './../../../../../service';


@Component({
    selector: 'search-streams',
    templateUrl: './search-streams.html',
    styleUrls: ['./../../search/search.scss']
})

export class SearchstreamsComponent {    
    streamList = [];
    @Input() term = "";

    constructor(private searchService: SearchService) {

    }

    ngOnChanges(changes) {
        this.search(changes.term.currentValue);
    }

    search(term = undefined) {
        if (!term)
            term = "a";

        this.searchService.search('stream', term).subscribe((res) => {
            console.log('streamList', res);
            this.streamList = res;
        });
    }
}