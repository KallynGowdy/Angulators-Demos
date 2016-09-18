// email-demo.component.ts
import { Component } from '@angular/core';
import { ValidationComponent, Angulators } from 'angulators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'regex-demo',
    templateUrl: './demo.component.html'
})
export class RegexDemoComponent extends ValidationComponent {
    form: FormGroup;
    value: string = '';
    constructor(private fb: FormBuilder) { super(); }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.form = this.fb.group({
            'value': [this.value, [
                    Angulators.regex(/^abcdef$/) // Register our regex validator
                ]
            ]
        });
        super.registerForm(this.form, this.formErrors, this.validationMessages);
    }

    // This object holds the errors that the form
    // currently has.
    formErrors = {
        value: ''
    };

    validationMessages = {
        value: {
            // These are the validation messages that 
            // will be set to the 'value' property
            // on formErrors.
            regex: 'Your value must equal "abcdef"'
        }
    };
}