import { Component } from '@angular/core';

@Component({
  selector: 'demo-email',
  templateUrl: './email.component.html'
})
export class EmailComponent {
  public usageCode: string;
  public usageHtml: string;
  ngOnInit() {
      this.usageCode = `
// my-component.ts
import { ValidationComponent, Angulators } as Angulators from 'angulators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'my-component',
    templateUrl: 'my-component.html'
})
export class MyComponent extends ValidationComponent {
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
      `;

      this.usageHtml = `
<!-- my-component.html -->
<validation-message [error]="formErrors.email">
</validation-message>
<input type="email" id="email" formControlName="email" required>
      `;
  }
}
