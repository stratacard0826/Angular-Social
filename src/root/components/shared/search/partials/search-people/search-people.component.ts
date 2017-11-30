import { Component, OnInit, Input } from '@angular/core';
import _ from 'lodash';

import { SearchService } from './../../../../../service';


@Component({
    selector: 'search-people',
    templateUrl: './search-people.html',
    styleUrls: ['./../../search/search.scss']
})

export class SearchPeopleComponent {    
    @Input() term = "";

    suggestedPeople = [];
    nearPeople = [];
    isLoading = false;

    constructor(private searchService: SearchService) {
    }   

    ngOnChanges(changes) {
        this.findSuggestedPeople(changes.term.currentValue);
        this.findNearPeople(changes.term.currentValue);
    }

    findSuggestedPeople(term = undefined) {
        this.isLoading = true;
        this.searchService.search('user', term).subscribe((res) => {
            this.suggestedPeople = this.populatePeople(res);
            this.isLoading = false;
        });
    }

    findNearPeople(term = undefined) {

        this.searchService.search('user', term).subscribe((res) => {
            this.nearPeople = this.populatePeople(res);
        });
    }

    private populatePeople(result)
    {
        var _people: any = [];
        _.each(result, (usr) => {
            var userAvatar = _.filter(usr.media, { displayType: 'avatar' });
            var user = {
                id: usr._id,
                username: usr.username,
                nickname: usr.nickname,
                avatar: userAvatar.length > 0 ? userAvatar[0].link : (usr.profileImageThumbnail ? usr.profileImageThumbnail : '/assets/images/img/profile01.png')
            }
            _people.push(user);
        });
        return _people;
    }

}