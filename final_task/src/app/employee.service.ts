import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }

  updateEmployee(id: string | undefined, updatedFields: Partial<Employee>): Observable<Employee> {
    if (!id) {
      throw new Error('Employee ID is required for update');
    }
    return this.http.patch<Employee>(`${this.apiUrl}/${id}`, updatedFields);
  }

  deleteEmployee(id: string | undefined): Observable<void> {
    if (!id) {
      throw new Error('Employee ID is required for deletion');
    }
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
