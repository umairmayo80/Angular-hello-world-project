import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsComponent } from './rooms.component';

const routes: Routes = [
    // the order of routes matter alot
    {path: 'rooms', component: RoomsComponent}, 
    {path:'rooms/add',component:RoomsAddComponent},
    {path:'rooms/:id',component: RoomsBookingComponent}, //here :id is dynamic
    {path: '', redirectTo:'/rooms',pathMatch:'full'}, //default root
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
