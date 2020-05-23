import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  baseUrl: string = 'http://localhost:8001';
  constructor(private httpClient: HttpClient) {}
  generateOtp(email: string): Observable<any> {
    return this.httpClient.post(
      `${this.baseUrl}/generate-otp?email=${email}`,
      email,
      { responseType: 'text' }
    );
  }
  verifyOtp(email: string, otp: string): Observable<any> {
    return this.httpClient.post(
      `${this.baseUrl}/submit-otp?email=${email}&otp=${otp}`,
      { email, otp },
      { responseType: 'text' }
    );
  }
  changePass(email: string, newPass: string): Observable<any> {
    return this.httpClient.post(
      `${this.baseUrl}/change-pass?email=${email}&newPass=${newPass}`,
      { email, newPass },
      { responseType: 'text' }
    );
  }
}
