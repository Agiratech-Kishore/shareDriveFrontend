import { Component, OnInit } from '@angular/core';
import { Ride } from '../ride'; 
import { RideService } from '../ride.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
  
})
export class DashboardComponent implements OnInit {

  rides: Ride[] = [];

  constructor(private rideService: RideService) {}
  

  ngOnInit() {
    this.rideService.getAvailableRides().subscribe(rides => {
      this.rides = rides;
    });
  }
}

