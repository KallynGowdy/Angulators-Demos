// email-demo.component.ts
import { Component } from '@angular/core';
import { ValidationComponent, Angulators } from 'angulators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'email-demo',
    templateUrl: './email-demo.html'
})
export class EmailDemoComponent extends ValidationComponent {
    form: FormGroup;
    email: string = '';
    constructor(private fb: FormBuilder) { super(); }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.form = this.fb.group({
            'email': [this.email, [
                    Angulators.email() // Register our email validator
                ]
            ]
        });
        super.registerForm(this.form, this.formErrors, this.validationMessages);
    }

    // This object holds the errors that the form
    // currently has.
    formErrors = {
        email: ''
    };

    validationMessages = {
        email: {
            // These are the validation messages that 
            // will be set to the 'email' property
            // on formErrors.
            email: 'Please provide a valid email.'
        }
    };
}