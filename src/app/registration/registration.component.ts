import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl:'./registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{
  user = new User();
  msg='';
  constructor(private _service : RegistrationService,private _router:Router){

  }
  ngOnInit(): void {
    
  }
  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response received");
        this.msg="Registration successful";
        this._router.navigate(['./login'])
      },
      error=>{
        console.log("exception occurred");
        this.msg=error.error;
      }
    )
  }

}
