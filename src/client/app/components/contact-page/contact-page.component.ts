import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { EmailerService } from '../../modules/core/services/emailer.service';

// import { ROUTE_ANIMATIONS_ELEMENTS } from '@src/app/core/animations/route-change.animations';
const ROUTE_ANIMATIONS_ELEMENTS = '';

@Component({
  selector: 'app-contact',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPageComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  form = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]]
  });

  constructor(private fb: FormBuilder, private emailer: EmailerService) {}

  ngOnInit() {}

  submit() {
    if (this.form.valid) {
      this.emailer
        .sendEmail(
          this.form.get('username').value,
          this.form.get('email').value,
          this.form.get('message').value
        )
        .subscribe(response => {
          console.log('Response:', response);
        });
    }
  }

  reset() {
    this.form.reset();
    this.form.clearValidators();
    this.form.clearAsyncValidators();
  }

  isFormSubmittable() {
    const isFormValid =
      !!this.form.get('username') &&
      !!this.form.get('email') &&
      !!this.form.get('message') &&
      !this.form.get('message').hasError('required') &&
      !this.form.get('message').hasError('minlength') &&
      !this.form.get('message').hasError('maxlength') &&
      !this.form.get('email').hasError('required') &&
      !this.form.get('username').hasError('required');
    return isFormValid;
  }
}
