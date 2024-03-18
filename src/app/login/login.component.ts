import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  user = new User();
  msg =""
  constructor(private _service : RegistrationService,private _router : Router){ }
  ngOnInit(): void {
    
  }
  loginUser(){
      this._service.loginUserFromRemote(this.user).subscribe(
        data =>{console.log("response recieved");
      this._router.navigate(['./dashboard'])} ,
        error => {console.log("exception occured");
      this.msg="Bad credentials,please enter valid emailid and password";}
      )
   }
  gotoregistration() {
    this._router.navigate(['./registration'])
    }
}
