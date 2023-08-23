import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string='';
  password: string='';

  // Router from programtic routing service, Router is service imported from '@angular/router';
  constructor(private router: Router) { }


  login():void{
    if(this.password === 'admin' && this.email === 'admin@gmail.com'){
      alert('Login Success')
      // this.router.navigate(["/rooms","add"])
      // we can do the same using navigateByUrl
      this.router.navigateByUrl("/rooms/add");
      
    }
    else{
      alert('Wrong Credentials')
    }
  }

  ngOnInit(): void {
  }

}
