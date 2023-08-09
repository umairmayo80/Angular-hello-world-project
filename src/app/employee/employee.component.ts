import { Content } from '@angular/compiler/src/render3/r3_ast';
import { AfterContentInit, Component, OnInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {


  empName: string = 'John'

  constructor() { }

  ngOnInit(): void {
  }


 

}
