import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../rooms/services/config.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  constructor(private consfigService: ConfigService) {
    console.log("booking-constr")
   }

  ngOnInit(): void {
  }

}
