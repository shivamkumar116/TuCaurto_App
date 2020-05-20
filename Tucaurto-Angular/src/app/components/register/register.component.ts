import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const baseUrl = 'http://localhost:8080/user/register';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user = {
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
    contactNumber: '',
  };
  submitted = false;

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit() {}

  saveUser() {
    const data = {
      name: this.user.name,
      username: this.user.username,
      password: this.user.password,
      contactNumber: this.user.contactNumber,
    };

    this.httpClient.post(baseUrl, data, { responseType: 'text' }).subscribe(
      (response) => {
        console.log(response);
        if (response === 'Username already Taken!') {
          alert('username already taken!! Try again.');
          this.submitted = false;
        } else {
          this.submitted = true;
          alert('user created!!');
        }
      },
      (error) => {
        console.log(error);
        alert(error);
      }
    );
    this.router.navigate(['login']);
  }
}
