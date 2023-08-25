import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../rooms/services/config.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private configService: ConfigService) {
    console.log("search-constr")
   }

  ngOnInit(): void {
  }

}
