import { Component , OnInit,ViewChild, ViewContainerRef} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  // template: `<h1 style='text-align: center'>Hello world </h1>
  
  // <p style='text-align:center'> Angular 13 based Sample Project </p>
  // `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'hotelinvertory';
  role = 'admin';

  @ViewChild('user',{read: ViewContainerRef, static:true}) vcr!: ViewContainerRef;

  ngOnInit(): void {
    // now we can create component on runtime /dynamically
      const componentRef = this.vcr.createComponent(RoomsComponent)

  }
}
