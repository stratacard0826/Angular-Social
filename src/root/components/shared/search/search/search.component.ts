import { Component, OnInit, Input } from '@angular/core';



@Component({
    selector: 'search',
    templateUrl: './search.html',
    styleUrls: ['./search.scss']
})

export class SearchComponent {
    @Input() searchType = "people";
    term = "";

    constructor() {
        
    }  

    changeSearchType(searchType) {
        this.searchType = searchType;
        console.log(searchType);
    }

}