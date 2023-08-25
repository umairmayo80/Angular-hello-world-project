import { Content } from '@angular/compiler/src/render3/r3_ast';
import { AfterContentInit, Component, OnInit, ContentChild } from '@angular/core';
import { ConfigService } from '../rooms/services/config.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {


  empName: string = 'John'

  constructor(private consfigService: ConfigService) {
    console.log("employee-constr") }

  ngOnInit(): void {
  }


 

}
