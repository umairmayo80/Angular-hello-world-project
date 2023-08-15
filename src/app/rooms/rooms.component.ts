import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { Room, RoomObjectInfo } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { HttpEventType } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Subject, of } from 'rxjs';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  hotelName = 'KingsMen Hotel';
  numberOfRooms: number = 10;

  hideRooms: boolean = false;

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent)
  headerChildreComponent!: QueryList<HeaderComponent>;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20,
  };

  roomsList: RoomObjectInfo[] = [];

  // just define the dependency in the constructor and Angular will automatically fill it
  // it will automatically create a varibale in the class and then assing it the dependency
  // public means it can be accessed in the .html file, private means it can only be accesed in the .ts file
  constructor(private roomService: RoomsService) {}

  error$ = new Subject<string>();

  getError$ = this.error$.asObservable();
  rooms$ = this.roomService.getRooms$.pipe(
    catchError((err)=>{
      console.log(err.message);
      this.error$.next(err.message)
      return of([]);
    })
  );

  ngOnInit(): void {
    // this will only be available if the viewChild is static true
    console.log(this.headerComponent);

    // to initialize the Object or load data from api
    this.roomService.getRooms().subscribe((frooms) => {
      this.roomsList = frooms;
    });
    // it will log nothing, there can be possible reason
    // 1. http.get was an aysnc call
    // 2. RxJs obervable object is an iterator, it will be loading when requested means lazy fetch
    console.log(this.roomsList);

    this.roomService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request successfully sent');
          break;
        }

        case HttpEventType.ResponseHeader: {
          console.log('request sucess');
          break;
        }

        case HttpEventType.DownloadProgress: {
          console.log('bytes loaded till now:' + event.loaded);
          break;
        }

        case HttpEventType.Response: {
          console.log('Request Complete');
          break;
        }
      }
    });
  }

  toggle(): void {
    this.hideRooms = !this.hideRooms;
  }

  selectedRoom!: RoomObjectInfo;
  selectRoom(room: RoomObjectInfo) {
    this.selectedRoom = room;
    console.log(room);
  }

  addRoom(): void {
    const room: RoomObjectInfo = {
      // roomNumber: '3',
      roomType: 'C1',
      price: 2000,
      photos: 'avs',
      amenities:'wifi',
      checkinTime: new Date(2000, 12, 1),
      checkoutTime: new Date(2000, 12, 2),
      rating: 5,
    };

    // this.roomsList.push(room) //this will not work if the child has .onPush ChangeDetectionStrategy
    // this.roomsList = [...this.roomsList, room]; //create new instance and then send it to child
    // using api to create the room in server
    this.roomService.addRoom(room).subscribe((data) => {
      this.roomsList = data;
    });
  }

  ngAfterViewInit(): void {
    // After the entire view is initialized
    console.log('rooms-component-AfterViewInit:');
    console.log(this.headerComponent);

    this.headerComponent.title = 'Kingsman Hotel';
    console.log(this.headerChildreComponent);
    this.headerChildreComponent.last.title = 'Last Title';

    const headerAtIndex1 = this.headerChildreComponent?.get(1);
    if (headerAtIndex1) {
      headerAtIndex1.title = 'Second title';
    }
  }

  ngAfterViewChecked(): void {
    this.headerComponent.title = 'Kingsman Hotel-AfterViewChecked';
  }

  editRoom() {
    const room: RoomObjectInfo = {
      roomNumber: '3',
      roomType: 'C1',
      amenities:'wifi',
      price: 2000,
      photos: 'updated',
      checkinTime: new Date(2000, 12, 1),
      checkoutTime: new Date(2000, 12, 2),
      rating: 5,
    };

    this.roomService.editRoom(room).subscribe((data) => {
      this.roomsList = data;
    });
  }

  deleteRoom() {
    this.roomService.deleteRoom('3').subscribe((data) => {
      this.roomsList = data;
    });
  }
}
