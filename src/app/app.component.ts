import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ViewContainerRef,
  ElementRef,
  Inject,
} from '@angular/core';
import { localStorageToken } from './localStorage.token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  // template: `<h1 style='text-align: center'>Hello world </h1>

  // <p style='text-align:center'> Angular 13 based Sample Project </p>
  // `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(
    @Inject(localStorageToken) private localStorage: Storage,
    private router: Router
  ) {}

  title = 'hotelinvertory';
  role = 'admin';

  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  @ViewChild('templateReferenceName', { static: true })
  htmlElement!: ElementRef;

  // only works if the viewChild static property is true
  ngOnInit(): void {

    
    this.router.events.subscribe(event =>{
      console.log(event)
    });

    // now we can create component on runtime /dynamically
    // const componentRef = this.vcr.createComponent(RoomsComponent)
    console.log('AppComponent-onInit');
    console.log(this.htmlElement);
    this.htmlElement.nativeElement.innerText =
      'This text is created using ngTemplateReference';

    this.localStorage.setItem('name', 'KingsMen-Hotel');


  }

  ngAfterViewInit(): void {
    // now we can create component on runtime /dynamically
    // const componentRef = this.vcr.createComponent(RoomsComponent)
    console.log('AfterViewInit');
    // now we can access the properties of the component
    // componentRef.instance.numberOfRooms = 50;
  }
}
