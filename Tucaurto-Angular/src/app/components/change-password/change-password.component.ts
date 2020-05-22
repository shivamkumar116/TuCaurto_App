import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordService } from '../../service/password.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../register/confirm-equal-validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  email = sessionStorage.getItem('temp');
  form: FormGroup;

  constructor(
    private router: Router,
    private passwordService: PasswordService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        password: [null, [Validators.required, Validators.minLength(6)]],

        confirmPassword: ['', Validators.required],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }
  changePass(password: string) {
    this.passwordService.changePass(this.email, password).subscribe((data) => {
      console.log(data);
      alert('Password successfully changed!!');
      this.router.navigate(['/login']);
      sessionStorage.removeItem('temp');
    });
  }
}
