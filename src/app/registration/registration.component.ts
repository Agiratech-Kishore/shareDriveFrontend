import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl:'./registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{
  user = new User();
  msg='';
  constructor(private _service : RegistrationService,private _router:Router,private toastr: ToastrService){

  }
  ngOnInit(): void {
    
  }
  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data=>{
        this.msg="Registration successful";
        this.toastr.success("Registered Successfully")
        this._router.navigate(['./login'])
      },
      error=>{
        this.toastr.error("Error creating account")
        this.msg=error.error;
      }
    )
  }

}
