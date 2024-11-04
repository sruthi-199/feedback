import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeAdminService } from '../employee-admin.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-performance-review',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './performance-review.component.html',
  styleUrls: ['./performance-review.component.css']
})
export class PerformanceReviewComponent implements OnInit {
  employees: Employee[] = [];
  editingEmployeeId: string | undefined; // Track the employee being edited

  constructor(private employeeService: EmployeeAdminService) {}

  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employeeService.getEmployees().subscribe(
      (data: Employee[]) => {
        this.employees = data.map(emp => ({
          ...emp,
          status: emp.status || '' // Set default to empty if status is undefined
        }));
        console.log('Fetched Employees:', this.employees);
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }

  enableEditing(employee: Employee) {
    this.editingEmployeeId = employee._id; // Set the employee ID being edited
    console.log('Editing Employee ID set to:', this.editingEmployeeId); // Log to verify
  }

  updateFeedback() {
    const employee = this.employees.find(emp => emp._id === this.editingEmployeeId);
    if (employee) {
      const update = { feedback: employee.feedback, status: employee.status };

      console.log('Updating Employee:', update); // Log to verify payload has status

      this.employeeService.updateEmployee(employee._id, update).subscribe(
        () => {
          console.log('Employee feedback and status updated successfully');
          this.editingEmployeeId = undefined; // Reset after updating
          this.fetchEmployees(); // Refresh employee list if necessary
        },
        (error) => {
          console.error(`Error updating employee with ID ${employee._id}:`, error);
        }
      );
    } else {
      console.error(`No employee found for ID: ${this.editingEmployeeId}`);
    }
  }
}
