import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomObjectInfo } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

  // Here this input create an property named 'rooms' in the html tag 'app-rooms-list' of this component
  // Then we can pass data to this component using <app-rooms-list rooms= "data">;
  @Input() rooms:RoomObjectInfo[] = [];


  //create an output event function that will send the required data
  @Output() selectedRoom = new EventEmitter<RoomObjectInfo>();

  constructor() { }

  selectRoom(room: RoomObjectInfo){
    this.selectedRoom.emit(room);
  }

  ngOnInit(): void {
  }

}
