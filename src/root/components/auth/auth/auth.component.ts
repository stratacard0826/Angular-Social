import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from "@angular/core";

@Component({
	selector: 'auth',
	templateUrl: './auth.html',
	styleUrls: ['./auth.scss']
})
export class AuthComponent implements OnChanges {
    @Input() success: any;
    @Input() fail: any;
    @Input() formType: string;
	@Input() submitType: any;
	@Input() user: any;
	@Output() onSubmit = new EventEmitter();

    isSubmitted = false;
	change: any;


    submit(authForm) {
        this.isSubmitted = true;
        this.fail = '';
        this.success = '';

        if (authForm.form.invalid)
            return false;


        if (this.user.phone && this.user.phone.charAt(0) != "+") {
            this.user.phone = "+358" + this.user.phone;
        }       
       
        this.onSubmit.emit({ user: this.user });
        this.isSubmitted = false;
		// this.resetForm(form);
	}

	resetForm(form) {
		form.reset();
	}

	ngOnChanges(changes: SimpleChanges) {
        for (let change in changes) {            
			if (changes.hasOwnProperty(change)) {
				let parent = changes[change];
				this.change = JSON.parse(JSON.stringify(parent.currentValue));
			}
		}
	}
}