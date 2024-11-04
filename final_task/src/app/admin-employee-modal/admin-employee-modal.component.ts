import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-employee-modal',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './admin-employee-modal.component.html',
  styleUrl: './admin-employee-modal.component.css'
})
export class AdminEmployeeModalComponent {

}
