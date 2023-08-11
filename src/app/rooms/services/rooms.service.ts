import { Injectable } from '@angular/core';
import { RoomObjectInfo } from '../rooms';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomObjectInfo[] = [] ;

  // .pipe is used to apply RxJS operators to an observable, and shareReplay(1) is used to multicast emissions while keeping a replay buffer of the most recent emission.
  // The $ symbol at the end of the variable name getRooms$ is a common naming convention in Angular for observables. 
  getRooms$ = this.http.get<RoomObjectInfo[]>('/api/rooms').pipe(
    shareReplay(1)
  )

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

  addRoom(room: RoomObjectInfo){
    return this.http.post<RoomObjectInfo[]>('/api/rooms',room)
  }


  editRoom(room: RoomObjectInfo){
    return this.http.put<RoomObjectInfo[]>(`/api/rooms/${room.roomNumber}`,room)
  }


  deleteRoom(id:string){
    return this.http.delete<RoomObjectInfo[]>(`/api/rooms/${id}`);
  }

  getPhotos(){
    const request = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      {
        reportProgress: true,
      }
    );
    return this.http.request(request);
  }
}
