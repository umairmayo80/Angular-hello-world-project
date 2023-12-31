import { Component, EventEmitter, Input, OnInit, OnChanges, Output , ChangeDetectionStrategy, SimpleChanges} from '@angular/core';
import { RoomObjectInfo } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges {

  // Here this input create an property named 'rooms' in the html tag 'app-rooms-list' of this component
  // Then we can pass data to this component using <app-rooms-list rooms= "data">;
  @Input() rooms:RoomObjectInfo[] | null = [];


  //create an output event function that will send the required data
  @Output() selectedRoom = new EventEmitter<RoomObjectInfo>();

  constructor() { }

  selectRoom(room: RoomObjectInfo){
    this.selectedRoom.emit(room);
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this SimpleChange contains the current value, previous value, isFirstChange
      console.log(changes)
  }

}
