import { Injectable } from '@angular/core';
import { RoomObjectInfo } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomObjectInfo[] =  [
    {
      roomNumber: 1,
      roomType: 'A1',
      price: 12000,
      photos: 'avs',
      checkinTime: new Date(2000, 12, 1),
    },
    {
      roomNumber: 2,
      roomType: 'B1',
      price: 8000,
      photos: 'avs',
      checkinTime: new Date(2000, 12, 1),
    },
    {
      roomNumber: 3,
      roomType: 'C1',
      price: 2000,
      photos: 'avs',
      checkinTime: new Date(2000, 12, 1),
    },
  ];
  constructor() { }

  getRooms(): RoomObjectInfo[]{
    return this.roomList;
  }
}
