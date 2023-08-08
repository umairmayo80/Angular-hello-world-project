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

  roomsList: RoomObjectInfo[] = [];

  constructor() {}

  ngOnInit(): void {
    // to initialize the Object or load data from api
    this.roomsList = [
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

  }

  

  toggle(): void {
    this.hideRooms = !this.hideRooms;
  }


  selectedRoom! : RoomObjectInfo;
  selectRoom(room: RoomObjectInfo){
    this.selectedRoom = room;
    console.log(room);
  }


  addRoom():void {
    const room: RoomObjectInfo =       {
      roomNumber:3,
      roomType: 'C1',
      price: 2000,
      photos: 'avs',
      checkinTime: new Date(2000, 12, 1),
    }
    
    // this.roomsList.push(room) //this will not work if the child has .onPush ChangeDetectionStrategy
    this.roomsList = [...this.roomsList, room] //create new instance and then send it to child
  }
}
