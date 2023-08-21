import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string='';
  password: string='';

  constructor() { }


  login():void{
    if(this.password === 'admin' && this.email === 'admin@gmail.com'){
      alert('Login Success')
    }
    else{
      alert('Wrong Credentials')
    }
  }

  ngOnInit(): void {
  }

}
