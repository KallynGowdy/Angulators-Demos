import { Component } from '@angular/core';

@Component({
  selector: 'demo-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  public usageCode: string;
  public usageHtml: string;
  ngOnInit() {
      this.usageCode = `
// my-component.ts
import * as Angulators from 'angulators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'my-component',
    templateUrl: 'my-component.html'
})
export class MyComponent {
    form: FormGroup;
    email: string;
    constructor(private fb: FormBuilder) { }

    formErrors = {
        email: ''
    };

    validationMessages = {
        email: {
            required: 'Please provide your email.',
            email: 'Please provide a valid email.'
        }
    };

    ngOnInit() {
        this.form = this.fb.group({
            'email': [this.email, [
                    Validators.required,
                    Angulators.email()
                ]
            ]
        });

        this.form.valueChanges
            .subscribe(data => this.onValueChanged(data));
    }

    // Stuff from Angular 2 forms tutorial...
    onValueChanged(data?: any) {
        if (!this.heroForm) { return; }
        const form = this.heroForm;
        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }
}
      `;

      this.usageHtml = `
<!-- my-component.html -->
<div *ngIf="formErrors.email">
    {{formErrors.email}}
</div>
<input type="email" id="email" formControlName="email" required >
      `;
  }
}
