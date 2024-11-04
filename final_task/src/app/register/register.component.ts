import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerdata!: FormGroup;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.registerdata = new FormGroup({
      ufname: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]),
      ulname: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]),
      uemail: new FormControl('', [Validators.required, Validators.email]),
      upass: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  onSubmit() {
    if (this.registerdata.valid) {
        const bodyData = this.registerdata.value;
        this.http.post("http://localhost:8000/student/create", bodyData)
            .subscribe({
                next: (resultData: any) => {
                    console.log("Response from server:", resultData); // Log the response
                    alert("Registered Successfully");
                    this.registerdata.reset();
                },
                error: (error) => {
                    console.error('Error during registration', error);
                    alert("Registration failed. Please try again later.");
                }
            });
    } else {
        alert("Invalid Form. Please check your inputs.");
    }
}

}
