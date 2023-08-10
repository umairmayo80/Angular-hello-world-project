import { Injectable } from '@angular/core';
import { RoomObjectInfo } from '../rooms';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomObjectInfo[] = [] ;
  constructor(private http: HttpClient) { 

  }

  getRooms(){
    // proxy .config will automatically redirect the call to the defined endpoint
    // Angular HHtp module uses rxjs
    // RxJs will return an observable object, to read the data from observale one must subscribe to the observable object
    //  this.http.get<RoomObjectInfo[]>('/api/rooms').subscribe(rooms =>{
    //   this.roomList = rooms;
    //   console.log('rooms',rooms)
    //  });

    // console.log(this.roomList)
    // return this.roomList;

    return this.http.get<RoomObjectInfo[]>('/api/rooms');
  }
}
