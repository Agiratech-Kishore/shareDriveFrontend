import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Ride } from '../ride'; 
import { RideService } from '../ride.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
  
})
export class DashboardComponent implements OnInit {
  userId : any;
  rides: Ride[] = [];
  rideId:any;
  errorMessage: any;
  postedBy : any;
  origin: string = '';
  destination: string = '';



  constructor(private rideService: RideService,private router:Router,private toastr: ToastrService) {}


  ngOnInit() {
    this.userId = sessionStorage.getItem('id');
    this.getAvailablerides();
  }

  onRequestButtonClick(ride: any) {
    const rideId = ride.id; 
    this.rideService.createRideRequest(this.userId,rideId).subscribe({
      next:(response)=>{
        this.toastr.success("Requested Sucessfully",)      },
      error:(error)=>{
        this.toastr.error("this ride is already requested by you")
        this.errorMessage =error.error.message || 'An error occurred while creating ride.';
      }
    }
    )
  }
  searchRides(): void {
    if (this.origin && this.destination) {
      this.rideService.getRidesByOriginAndDestination(this.origin, this.destination)
        .subscribe(rides => {
          if(rides.length === 0){
            this.getAvailablerides();
          } else{
            this.rides = rides;
          }
        },
        error => {
          console.error('Error occurred while fetching rides:', error);
        }
      );
    }
  }

  goToProfile(){
    this.router.navigate(['/profile'])
  }
  goToLogin(){
    this.router.navigate(['./login'])
    sessionStorage.clear();
  }
  getAvailablerides(){
    this.rideService.getAvailableRides().subscribe(rides => {
      const currentDate = new Date();
      this.rides = rides.filter(ride=>{
      try{
        const rideDate = new Date(ride.date);
        const rideTimeParts = ride.time.split(':');

        const hours = parseInt(rideTimeParts[0],10);
        const minutes = parseInt(rideTimeParts[1],10);
        const seconds = parseInt(rideTimeParts[2],10);
        rideDate.setHours(hours,minutes,seconds);
        return rideDate > currentDate;
        } catch(error){
          console.error('Error parsing ride date:', error);
          return false;
        }
        
      });
    });

  }

}

