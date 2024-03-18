import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ride } from './ride';

@Injectable({
  providedIn: 'root'
})
export class RideService {

    constructor(private http: HttpClient) {}

  getAvailableRides(): Observable<Ride[]> {
    return this.http.get<Ride[]>('http://localhost:8080/ride');
  }
  createRide(rideDetails: any): Observable<any> {
    // console.log(rideDetails)
    return this.http.post('http://localhost:8080/ride', rideDetails);
  }
}
  