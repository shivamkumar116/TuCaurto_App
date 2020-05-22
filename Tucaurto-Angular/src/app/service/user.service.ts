import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../common/User';
import { ThrowStmt } from '@angular/compiler';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  profileUrl = 'http://localhost:8004/property-service';

  mypropertiesUrl = 'http://localhost:8004/property-service';

  constructor(private httpClient: HttpClient) {}

  updateProfile(email: string, value: any): Observable<Object> {
    console.log(value);
    return this.httpClient.put(`${this.profileUrl}/${email}`, value);
  }

  getProfile(email: string): Observable<User> {
    return this.httpClient.get<User>(`${this.profileUrl}/${email}`);
  }

  getMyProperties(email: string): Observable<any> {
    return this.httpClient
      .get(`${this.mypropertiesUrl}/${email}`)
      .pipe(retry(4));
  }

  deleteProperty(id: number, email: string): Observable<any> {
    return this.httpClient.delete(`${this.mypropertiesUrl}/${email}/${id}`);
  }
}
