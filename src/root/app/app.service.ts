import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class AppService {
	constructor(private localStorageService: LocalStorageService) {

	}

	initializeStorage(): void {
		// if (!localStorage.hasOwnProperty('uSTADIUM')) {
		// 	localStorage.uSTADIUM = {};
		// }
		this.localStorageService.clearAll();
	}
}