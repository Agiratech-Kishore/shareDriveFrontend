import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { RideService } from '../ride.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
completeRide(rideId:number) {
  this.rideService.rideStatus(rideId,'Completed').subscribe(()=>{
    console.log("Ride status updated:Completed")
    this.getUser
  },error=>{
    console.error("Error marking ride ")
  })
}
cancelRide(rideId:number) {
  this.rideService.rideStatus(rideId,'Cancelled').subscribe(()=>{
    console.log("Ride status updated:Canceled")
    this.getUser
  },error=>{
    console.error("Error marking ride : canceled ")
  })
}

  id:any;
  user : any = {
  }
  errorMessage: any;
  showRideList: boolean = false; 
  showDriverRideList: boolean = false; 
  constructor(private userService: UserService,private rideService: RideService,private _router: Router){}
  ngOnInit(): void {
    this.id = sessionStorage.getItem('id');
    this.getUser();

  }
  goToDashboard() {
    this._router.navigate(['./dashboard'])
  }
  toggleRideList() {
    this.showRideList = true;
    this.showDriverRideList = false;
  }

  toggleDriverRideList() {
    this.showRideList = false;
    this.showDriverRideList = true;
  }
  public getUser() {
    this.userService.getUserById(this.id).subscribe({
      next: (response) => {
        this.user = response;
      },
      error: (error) => {
        console.error('Error while getting info:', error);
        this.errorMessage = error.error.message || 'An error occurred while getting info.';
      }
    });
  
}
}
