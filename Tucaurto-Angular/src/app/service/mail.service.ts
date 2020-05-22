import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  baseUrl: string = 'http://localhost:8003';

  constructor(private httpClient: HttpClient) {}

  sendRegisterMail(value: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/send-mail`, value,{ responseType: 'text' });
  }
}
