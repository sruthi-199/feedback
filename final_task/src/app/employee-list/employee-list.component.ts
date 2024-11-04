import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  selectedEmployee: Employee = { _id: '', name: '', position: '', reviewPeriod: '', feedback: '' }; // Change `id` to `_id`
  isEditing: boolean = false;
  originalFeedback: string = '';

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employeeService.getEmployees().subscribe(
      (data: Employee[]) => {
        console.log('Fetched employees:', data);
        this.employees = data;
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }

  openAddModal() {
    this.isEditing = false;
    this.selectedEmployee = { _id: '', name: '', position: '', reviewPeriod: '', feedback: '' }; // Change `id` to `_id`
    this.openModal();
  }

  openUpdateModal(employee: Employee) {
    this.isEditing = true;
    this.selectedEmployee = { ...employee };
    this.originalFeedback = employee.feedback;
    this.openModal();
  }

  openModal() {
    const modalElement = document.getElementById('employeeModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  saveEmployee() {
    if (this.isEditing) {
      this.selectedEmployee.feedback = this.originalFeedback; // Preserve original feedback
      const updatedEmployee = {
        name: this.selectedEmployee.name,
        position: this.selectedEmployee.position,
        reviewPeriod: this.selectedEmployee.reviewPeriod
      };
      this.employeeService.updateEmployee(this.selectedEmployee._id, updatedEmployee).subscribe( // Change `id` to `_id`
        () => {
          this.fetchEmployees();
          this.closeModal();
        },
        (error) => {
          console.error(`Error updating employee with ID ${this.selectedEmployee._id}:`, error); // Change `id` to `_id`
        }
      );
    } else {
      this.employeeService.addEmployee(this.selectedEmployee).subscribe(
        (employee: Employee) => {
          this.fetchEmployees();
          this.closeModal();
        },
        (error) => {
          console.error('Error adding employee:', error);
        }
      );
    }
  }

  closeModal() {
    const modalElement = document.getElementById('employeeModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    }
  }

  deleteEmployee(id: string | undefined) { // Ensure this accepts string
    console.log('Deleting employee with ID:', id);
    if (!id) { // Simplified check for undefined or empty string
      console.error('Cannot delete employee: ID is undefined or empty');
      return;
    }
  
    this.employeeService.deleteEmployee(id).subscribe(
      () => {
        this.fetchEmployees();
      },
      (error) => {
        console.error(`Error deleting employee with ID ${id}:`, error);
      }
    );
  }
}
