import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  user = new User();
  userId : any;
  driverId : any;
  token:any;
  msg =""
  constructor(private _service : RegistrationService,private _router : Router,private toastr: ToastrService){ }
  ngOnInit(): void {
    
  }
  loginUser(){
      this._service.loginUserFromRemote(this.user).subscribe(
        data =>{console.log("response recieved");
        this.userId = data.userId;
        sessionStorage.setItem('id',this.userId);
        this.toastr.success("Login sucess")

        this.token = data.token;
        sessionStorage.setItem('authtoken',this.token);
      this._router.navigate(['./dashboard'])} ,
        error => {console.log("exception occured");
        this.toastr.error("Enter valid credentials")
      this.msg="Bad credentials,please enter valid emailid and password";}
      )
   }
}
