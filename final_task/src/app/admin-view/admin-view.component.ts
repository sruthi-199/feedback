import { Component } from '@angular/core';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeReviewService } from '../employee-review.service';

@Component({
  selector: 'app-admin-view',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.css'
})
export class AdminViewComponent {
  feedbacks: Feedback[] = [];

  constructor(private employeeService: EmployeeReviewService) {}

  ngOnInit(): void {
    this.loadFeedbacks();
  }

  loadFeedbacks() {
    this.employeeService.getFeedbacks().subscribe(
      (data: Feedback[]) => {
        this.feedbacks = data;
      },
      (error) => {
        console.error('Error fetching feedbacks:', error);
      }
    );
  }
}
