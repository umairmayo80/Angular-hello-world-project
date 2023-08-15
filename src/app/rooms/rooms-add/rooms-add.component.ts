import { Component, OnInit } from '@angular/core';
import { RoomObjectInfo } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent implements OnInit {

  constructor(private roomService: RoomsService) { }

  room: RoomObjectInfo = {
    roomNumber: '',
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0
  }


  ngOnInit(): void {
  }

  AddRoom() {
    this.roomService.addRoom(this.room).subscribe(
      (data)=> {
        console.log(data)
      }
    )
  }

}
