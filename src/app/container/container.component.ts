import { Component, ContentChild, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  // define contentChild property to hold the child
  @ContentChild(EmployeeComponent) employeeComponent!: EmployeeComponent;


  constructor() { }

  ngOnInit(): void {
  }

   // The contentChild or ng-content filled/passed or projected by parent can be accesed in AfterContentInit hook
   ngAfterContentInit(): void {
    console.log(this.employeeComponent)
}


}
