import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logindata!: FormGroup;

  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit() {
    this.logindata = new FormGroup({
      uemail: new FormControl('', [Validators.required, Validators.email]),
      upass: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  onSubmit() {
    if (this.logindata.valid) {
        this.http.post("http://localhost:8000/student/login", this.logindata.value)
            .subscribe((data: any) => {
                if (data.status) {
                    alert("Login successful");
                    console.log("login success")
                    this.logindata.reset();
                    this.router.navigate(['/employee']);
                    
                } else {
                    alert(data.message); // Use data.message to alert the user
                }
                this.logindata.reset();
            }, (error) => {
                // Handle the case where the server returns an error response
                alert("An error occurred during login.");
                console.error(error);
            });
    } else {
        alert("Invalid Email or Password");
    }
}
}
