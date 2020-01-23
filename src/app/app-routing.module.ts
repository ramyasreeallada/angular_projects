import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ListEmployeesComponent } from './employee/list-employees/list-employees.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ProductComponent } from './product/product.component';




const routes: Routes = [
   { path: 'list', component: ListEmployeesComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'user', component: CreateUserComponent },
 { path: 'login', component: RegisterLoginComponent }, 
 { path: 'tickets', component: TicketsComponent },
 { path: 'product', component: ProductComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
