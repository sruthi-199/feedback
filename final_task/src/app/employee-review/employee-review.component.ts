import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Feedback } from '../feedback';
import { EmployeeReviewService } from '../employee-review.service';
import { FeedbackService } from '../feedback.service';


@Component({
  selector: 'app-employee-review',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-review.component.html',
  styleUrls: ['./employee-review.component.css']
})
export class EmployeeReviewComponent {
  ename:string='';
  reviewTitle: string = '';
  dueDate: string = '';
  status: string = 'Pending';

  constructor(private employeeService: EmployeeReviewService, private feedbackService: FeedbackService) {}

  submitForm() {
    // Create a feedback object with reviewTitle, dueDate, and status
    const feedback: Feedback = {
      reviewTitle: this.reviewTitle,
      dueDate: this.dueDate,
      status: this.status,
      ename:this.ename
    };

    // Call the service to add feedback
    this.employeeService.addFeedback(feedback).subscribe(
      response => {
        console.log('Feedback submitted successfully:', response);
        this.feedbackService.submitFeedback(feedback);
        // Reset the form after submission
        this.reviewTitle = '';
        this.dueDate = '';
        this.status = 'Pending'; // Reset to default status
      },
      error => {
        console.error('Error submitting feedback:', error);
      }
    );
  }
}
