import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';

const routes: Routes = [

  // the order of routes matter alot
  {path: 'rooms', component: RoomsComponent}, 
  {path:'rooms/add',component:RoomsAddComponent},
  {path:'rooms/:id',component: RoomsBookingComponent}, //here :id is dynamic
  {path: '', redirectTo:'/rooms',pathMatch:'full'}, //default root
  {path: 'employee', component: EmployeeComponent},

  
  // keep all the valid routes above the wildcard route
  {path:'**', component: NotfoundComponent}, //wildcard to handle paths that don`t exist


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
