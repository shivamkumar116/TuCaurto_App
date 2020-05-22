import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../common/Property';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private baseUrl = 'http://localhost:8004/property-service/properties';

  constructor(private httpClient: HttpClient) {}

  getAllProperties(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl).pipe(retry(5));
  }

  getFilteredProperties(
    city: string,
    price: number,
    type: number
  ): Observable<any> {
    return this.httpClient
      .get<any>(
        `${this.baseUrl}/filter?city=${city}&price=${price}&typeID=${type}`
      )
      .pipe(retry(5));
  }

  getSelectedProperty(id: number): Observable<Property> {
    return this.httpClient
      .get<Property>(`${this.baseUrl}/${id}`)
      .pipe(retry(5));
  }

  //post a property
  postproperty(Property: Object, type: number) {
    let user = sessionStorage.getItem('username');
    return this.httpClient.post(`${this.baseUrl}/${user}/${type}`, Property);
  }

  //update Property
  updateProperty(propertyID: number, type: number, value: any) {
    let user = sessionStorage.getItem('username');
    return this.httpClient.put(
      `${this.baseUrl}/${user}/${propertyID}/${type}`,
      value
    );
  }

  //find by name containing
  findByNameContaining(str: string): Observable<any> {
    return this.httpClient.get<any>(
      `http://localhost:8004/property-service/searchproperties?str=${str}`
    );
  }
}
