import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordService } from '../../service/password.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from '@angular/compiler/src/util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css'],
})
export class VerifyOtpComponent implements OnInit {
  form: FormGroup;
  constructor(
    private router: Router,
    private passwordService: PasswordService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      otp: [null, Validators.required],
    });
  }
  verifyOtp(otp: string) {
    let email = sessionStorage.getItem('temp');
    this.passwordService.verifyOtp(email, otp).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Info', data, 'info');

        this.router.navigate(['/changepass']);
      },
      (error) => {
        Swal.fire('Error', 'Something went wrong', 'error');
      }
    );
  }
}
