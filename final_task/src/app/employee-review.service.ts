import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root'
})
export class EmployeeReviewService {
  private apiUrl = 'http://localhost:4000/feedback'; // Make sure your API URL is correct

  constructor(private http: HttpClient) {}

  getFeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.apiUrl); // Get all feedbacks
  }

  // Method to add feedback with reviewTitle, dueDate, and status
  addFeedback(feedback: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(this.apiUrl, feedback); // Send feedback to the new endpoint
  }
}
