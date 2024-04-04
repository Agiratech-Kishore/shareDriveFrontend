import { Component, OnInit } from '@angular/core';
import { Ride } from '../ride';
import { RideService } from '../ride.service';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-create-ride',
  templateUrl: './create-ride.component.html',
  styleUrls: ['./create-ride.component.css'],
})
export class CreateRideComponent implements OnInit {
  ride = {
    userId: '',
    origin: '',
    destination: '',
    availableSeats: '',
    date: '',
    time: '',
    vehicleId: '',
  };
  vehicles : Vehicle[] = []
  userId: any;
  errorMessage: any;

  constructor(
    private rideService: RideService,
    private _router: Router,
    private toastr: ToastrService,
    private _http : HttpClient
  ) {}
  ngOnInit(): void {
    this.userId = sessionStorage.getItem('id');
    this.ride.userId = this.userId;
    this.loadVehicles();
  }
  goToDashboard() {
    this._router.navigate(['./dashboard']);
  }
  

  createRide() {
    this.rideService.createRide(this.ride).subscribe({
      next: (response) => {
        this.toastr.success('Ride created Successfully');
        this._router.navigate(['./dashboard']);
      },
      error: (error) => {
        this.toastr.error('Error creating ride:');
        console.error('Error creating ride:', error);
        this.errorMessage =
          error.error.message || 'An error occurred while creating ride.';
      },
    });
  }
  loadVehicles() {
  this.rideService.loadVehicles(this.userId).subscribe({
    next : (data : any) => {
      this.vehicles = data;
      console.log(this.vehicles);
    },
    error  : (e) => {
      this.toastr.error('Error getting vehicles from server')
    }
  })
  }
}

