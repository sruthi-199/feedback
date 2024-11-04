import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private feedbacks: Feedback[] = []; // Store multiple feedbacks
  private feedbackSubject = new BehaviorSubject<Feedback[]>(this.feedbacks);
  feedback$ = this.feedbackSubject.asObservable();

  submitFeedback(feedback: Feedback) {
    this.feedbacks.push(feedback); // Add new feedback to the array
    this.feedbackSubject.next(this.feedbacks); // Update the observable with the new array
  }
}
