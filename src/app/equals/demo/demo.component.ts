// email-demo.component.ts
import { Component } from '@angular/core';
import { ValidationComponent, Angulators } from 'angulators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'equals-demo',
    templateUrl: './demo.component.html'
})
export class EqualsDemoComponent extends ValidationComponent {
    form: FormGroup;
    password: string = '';
    confirmPassword: string = '';

    constructor(private fb: FormBuilder) { super(); }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.form = this.fb.group({
            'password': [this.password, []],
            'confirmPassword': [this.confirmPassword, [
                    Angulators.equals(() => this.form, 'password') // Register our validator
                ]
            ]
        });
        super.registerForm(this.form, this.formErrors, this.validationMessages);
    }

    // This object holds the errors that the form
    // currently has.
    formErrors = {
        confirmPassword: ''
    };

    validationMessages = {
        confirmPassword: {
            // These are the validation messages that 
            // will be set to the 'value' property
            // on formErrors.
            'equals-password': 'Your passwords don\'t match'
        }
    };
}