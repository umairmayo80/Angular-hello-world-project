import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsComponent } from './rooms.component';

const routes: Routes = [
  { path: 'rooms/add', component: RoomsAddComponent },
  // the order of routes matter alot
  {
    path: 'rooms',
    component: RoomsComponent,
    children: [
      // { path: 'add', component: RoomsAddComponent }, it will also work and it must be before the dynamic route
      { path: ':id', component: RoomsBookingComponent },
      
    ],
  },

  //here :id is dynamic
  { path: '', redirectTo: '/rooms', pathMatch: 'full' }, //default root
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
