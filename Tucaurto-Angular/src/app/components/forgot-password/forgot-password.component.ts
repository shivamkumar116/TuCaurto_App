import { Component, OnInit } from '@angular/core';
import { PasswordService } from '../../service/password.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  form: FormGroup;

  constructor(
    private passwordService: PasswordService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [null, [Validators.required, Validators.email]],
    });
  }
  generateOtp(email: string) {
    this.passwordService.generateOtp(email).subscribe((data) => {
      console.log(data);
      sessionStorage.setItem('temp', email);
      this.router.navigate(['/verifyotp']);
    });
  }
}
