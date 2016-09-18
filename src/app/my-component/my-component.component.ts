// my-component.component.ts
import { Component } from '@angular/core';
import { ValidationComponent, Angulators } from 'angulators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'my-component',
    templateUrl: './my-component.html'
})
export class MyComponent extends ValidationComponent {
    form: FormGroup;
    email: string;
    constructor(private fb: FormBuilder) { super(); }

    formErrors = {
        email: ''
    };

    validationMessages = {
        email: {
            required: 'Please provide your email.',
            email: 'Please provide a valid email.'
        }
    };

    buildForm() {
        this.form = this.fb.group({
            'email': [this.email, [
                    Validators.required,
                    Angulators.email()
                ]
            ]
        });
        super.buildForm();
    }
}