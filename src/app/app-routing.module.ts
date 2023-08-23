import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path: 'employee', component: EmployeeComponent},
  {path: 'login',component: LoginComponent },

  
  // keep all the valid routes above the wildcard route
  {path:'**', component: NotfoundComponent}, //wildcard to handle paths that don`t exist


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
