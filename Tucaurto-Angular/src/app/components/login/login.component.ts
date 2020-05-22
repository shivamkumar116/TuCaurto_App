import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  username = '';
  password = '';
  @Input() error: string | null;
  invalidLogin = false;

  constructor(
    private router: Router,
    public loginservice: AuthenticationService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  checkLogin() {
    this.loginservice.authenticate(this.username, this.password).subscribe(
      (data) => {
        if (data.role === 'ROLE_USER') {
          this.router.navigate(['index']);
          this.invalidLogin = false;
        } else {
          this.router.navigate(['home']);
        }
      },
      (error) => {
        this.invalidLogin = true;
        alert('Please check the credentials!!');
      }
    );
  }
}
