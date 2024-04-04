import { Component, OnInit } from '@angular/core';
import { RideRequest } from '../ride-request';
import { RideService } from '../ride.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-ride-request',
  templateUrl: './ride-request.component.html',
  styleUrls: ['./ride-request.component.css'] // Fixed typo styleUrl -> styleUrls
})
export class RideRequestComponent implements OnInit {
  userId: any;
  rideRequests: RideRequest[] | undefined;

  constructor(
    private rideService: RideService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.userId = sessionStorage.getItem('id');
    this.fetchRideRequests();
  }

  goToDashboard(): void {
    this.router.navigate(['./dashboard']);
  }

  fetchRideRequests(): void {
    this.rideService.getAllRideRequest(this.userId).subscribe(
      (requests: RideRequest[]) => {
        this.rideRequests = requests;
      },
      (error) => {
        console.error('Error fetching ride requests:', error);
      }
    );
  }

  acceptRequest(rideRequestId: number): void {
    this.rideService.acceptRideRequest(rideRequestId).pipe(
      tap(() => {
        this.toastr.success("Accepted");
        this.fetchRideRequests(); 
      }),
      catchError(error => {
        this.toastr.error("Error");
        return of(error);
      })
    ).subscribe();
  }

  denyRequest(rideRequestId: number): void {
    this.rideService.denyRideRequest(rideRequestId).pipe(
      tap(() => {
        this.toastr.error("Ride request denied");
        this.fetchRideRequests(); 
      }),
      catchError(error => {
        console.error('Error denying ride request:', error);
        return of(error); 
      })
    ).subscribe();
  }
}
