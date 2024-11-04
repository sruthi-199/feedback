import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface AdminLoginResponse {
    status: boolean;
    message: string;
}

@Component({
    selector: 'app-admin-login',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './admin-login.component.html',
    styleUrls: ['./admin-login.component.css'] // Corrected property name
})
export class AdminLoginComponent implements OnInit {
    loginForm!: FormGroup;

    constructor(
      private fb: FormBuilder,
      private http: HttpClient,
      private router: Router
  ) {
      this.loginForm = this.fb.group({
          username: ['', Validators.required],  // Changed from uemail to username
          upass: ['', Validators.required]       // Keep as is
      });
  }

  ngOnInit(): void {
      // Any initialization logic can go here
  }

  onSubmit() {
      if (this.loginForm.valid) {
          const loginData = {
              username: this.loginForm.value.username, // This remains the same
              password: this.loginForm.value.upass      // This remains the same
          };

          const apiUrl = 'http://localhost:8000/admin/login';

          this.http.post<AdminLoginResponse>(apiUrl, loginData).subscribe(
              response => {
                  if (response && response.status) {
                    alert("login success");
                    console.log("login successful")
                      this.router.navigate(['/admin-dashboard']);
                  } else {
                      alert(response.message); // Display error message
                  }
              },
              error => {
                  console.error('Login error:', error);
                  alert('Login failed. Please try again.');
              }
          );
      }
  }
}
