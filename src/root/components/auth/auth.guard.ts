import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { LocalStorageService } from 'angular-2-local-storage';

import { AuthService } from './auth.service';



@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router,
        private localStorageService: LocalStorageService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        var isValid = true;        
        if ((this.localStorageService.get("user") || state.url!=='/') && !this.authService.getJWT()) {            
            isValid = false;
            this.localStorageService.clearAll();          
        }

        return Observable.of(isValid);
    }
}