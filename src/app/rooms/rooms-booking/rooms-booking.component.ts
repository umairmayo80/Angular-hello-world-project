import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable, map} from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss'],
})
export class RoomsBookingComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}

  id!: string;

  id$!: Observable<string>; 

  ngOnInit(): void {
    // this.id = this.router.snapshot.params['id']; //snapshot value will not updated within the same view, there can be possibility that parent may emit new value
    this.router.params.subscribe((params) => {
      console.log(params);
      this.id = params['id'];
    });

    // we usually don`t want to subscribe, to handle it automically we can use pipe, pipe will return observable, and we can use store that observable and then call it html

    this.id$ = this.router.params.pipe(
      map(params => params['id'])
    )
  }
}
