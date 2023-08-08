import { Component, OnInit } from '@angular/core';
import { Room, RoomObjectInfo } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'KingsMen Hotel';
  numberOfRooms: number = 10;

  hideRooms: boolean = false;



  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20,
  };

  roomsList: RoomObjectInfo[] = [
    {
      roomNumber:1,
      roomType: 'A1',
      price: 12000,
      photos: 'avs',
      checkinTime: new Date(2000, 12, 1),
    },
    {
      roomNumber:2,
      roomType: 'B1',
      price: 8000,
      photos: 'avs',
      checkinTime: new Date(2000, 12, 1),
    },
    {
      roomNumber:3,
      roomType: 'C1',
      price: 2000,
      photos: 'avs',
      checkinTime: new Date(2000, 12, 1),
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    this.hideRooms = !this.hideRooms;
  }


  selectedRoom! : RoomObjectInfo;
  selectRoom(room: RoomObjectInfo){
    this.selectedRoom = room;
    console.log(room);
  }
}
