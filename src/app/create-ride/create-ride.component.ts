import { Component, OnInit } from '@angular/core';
import { Ride } from '../ride'; 
import { RideService } from '../ride.service';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-create-ride',
  templateUrl:'./create-ride.component.html',
  styleUrls: ['./create-ride.component.css']
})
export class CreateRideComponent{
  ride = {
    userId: '',
    origin: '',
    destination: '',
    availableSeats: '',
    date: '',
    time: '',
    vehicleId: ''
  };
 
  constructor(private rideService: RideService,private _router : Router) { }

  createRide() {
    this.rideService.createRide(this.ride).subscribe({
      next: (response) => {
        console.log('Ride created successfully', response);
        this._router.navigate(['./dashboard'])
      },
      error: (error) => {
        console.error('Error creating ride:', error);
      }
    });
}
}
