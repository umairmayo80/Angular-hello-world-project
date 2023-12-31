import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    RoomsBookingComponent,
    RoomsAddComponent,
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    HeaderModule
  ]
})
export class RoomsModule { }
