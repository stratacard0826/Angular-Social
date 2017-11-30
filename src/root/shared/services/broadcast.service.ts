import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class BroadcastService {
    private event: Subject<Event> = new Subject<Event>();
    public loaderStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    broadcast(event: Event): void {
        return this.event.next(event);
    }


    on(event: Event): Observable<Event> {        
        // DO NOT SUBSCRIBE HERE. Return the observable.
        return this.event.asObservable()
            // Only keep events matching the given `event` param
           .filter(e => e == event);
    }

    onAny(): Observable<Event> {
        // DO NOT SUBSCRIBE HERE. Return the observable.
        return this.event.asObservable();          
    }

    displayLoader(value: boolean) {
        this.loaderStatus.next(value);
    }
}