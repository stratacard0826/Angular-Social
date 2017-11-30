import { Component, OnInit, Input } from '@angular/core';
import { _ } from 'lodash';

import { SearchService } from './../../../../../service';


@Component({
    selector: 'search-posts',
    templateUrl: './search-posts.html',
    styleUrls: ['./search-posts.scss','./../../search/search.scss']
})

export class SearchPostsComponent {    
    postList = [];
    @Input() term = "";
    isLoading = false;

    constructor(private searchService: SearchService) {


    }

    ngOnChanges(changes) {
        this.search(changes.term.currentValue);
    }

    search(term = undefined) {  
        this.isLoading = true;
        this.searchService.search('post', term).subscribe((res) => {
            this.isLoading = false;
            this.postList = res;
        });
    }

}