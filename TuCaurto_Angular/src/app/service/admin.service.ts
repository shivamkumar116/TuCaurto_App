import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl= "http://localhost:8006/";

  constructor(private httpClient: HttpClient) { }
  getPropCount(): Observable<any>
  {
    return this.httpClient.get(`${this.baseUrl}/property-api/properties/getcount`);
  }
  getUserCount(): Observable<any>
  {
    return this.httpClient.get(`${this.baseUrl}/user-api/users/getcount`);
  }
  listAllUsers(): Observable<any> {

    return this.httpClient.get(`${this.baseUrl}/user-api/users` );
  }
  listAllProps(): Observable<any>
  {
    return this.httpClient.get(`${this.baseUrl}/property-api/properties`);
  }
}

