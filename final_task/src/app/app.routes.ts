import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AdminEmployeeModalComponent } from './admin-employee-modal/admin-employee-modal.component';
import { EmployeeReviewComponent } from './employee-review/employee-review.component';
import { PerformanceReviewComponent } from './performance-review/performance-review.component';
import { DefaultLoadComponent } from './default-load/default-load.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminViewComponent } from './admin-view/admin-view.component';

export const routes: Routes = [
    { path: '', component:DefaultLoadComponent }, 
    { path: 'login', component:AdminLoginComponent }, 
    { path: 'register', component:RegisterComponent },
    { path: 'employee-login', component:LoginComponent },
    { path: 'admin-dashboard', component: AdminEmployeeModalComponent },
    { path: 'view-review', component: AdminViewComponent },
    { path: 'employee-list', component:EmployeeListComponent },
    { path: 'employee', component:EmployeeComponent },
    { path: 'employee-review', component:EmployeeReviewComponent },
    { path: 'performance-review', component:PerformanceReviewComponent }, 
];
