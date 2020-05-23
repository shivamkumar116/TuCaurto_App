import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Feedback} from "../common/Feedback";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  baseUrl="http://localhost:8010/feedback";


  constructor(private httpClient: HttpClient) { }
  submitFeedback(feedback: Feedback): Observable<any>
  {
    return this.httpClient.post(`${this.baseUrl}`,feedback,{responseType: "text"});
  }
  getFeedback(): Observable<any>
  {
    return this.httpClient.get(`${this.baseUrl}`);
  }
  getFeedCount(): Observable<any>
  {
    return this.httpClient.get("http://localhost:8010/feedbackcount");
  }
  deleteFeedback(id: number): Observable<any>
  {
    return this.httpClient.delete(`${this.baseUrl}?id=${id}`,{responseType: "text"});
  }
}
