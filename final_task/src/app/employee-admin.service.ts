import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAdminService {
  private apiUrl = 'http://localhost:3000/employees'; // Adjust the URL as needed

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }

  updateEmployee(id: string | undefined, update: Partial<Employee>): Observable<Employee> {
    console.log('Update payload:', update); // Log the payload before making the request
    return this.http.patch<Employee>(`${this.apiUrl}/${id}`, update);
  }
}
