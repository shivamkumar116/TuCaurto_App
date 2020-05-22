import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [null, [Validators.required, Validators.email]],
    });
  }

  sendEmail() {}
}
