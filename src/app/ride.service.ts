import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ride } from './ride';
import { RideRequest } from './ride-request';

@Injectable({
  providedIn: 'root'
})
export class RideService implements OnInit{
  private baseUrl = "http://localhost:8080/v1/ride";
  public apiUrl = "http://localhost:8080/v1/ride/ride-requests"
  public requestUrl = "http://localhost:8080/v1/ride/request"

    constructor(private http: HttpClient) {}
    ngOnInit(): void {
      
    }

  getAvailableRides(): Observable<Ride[]> {
    return this.http.get<Ride[]>(this.baseUrl);
  }
  createRide(rideDetails: any): Observable<any> {
    return this.http.post(this.baseUrl, rideDetails);
  }
  getAllRideRequest(id:number){
    return this.http.get<RideRequest[]>(`${this.apiUrl}/user/${id}`);
  }
  createRideRequest(userId:number,rideId:number){
    const url = `${this.requestUrl}?user=${userId}&ride=${rideId}`;
    return this.http.post(url,null);
  }
  acceptRideRequest(rideRequestId: number): Observable<any> {
    return this.http.patch<any>(`${this.baseUrl}/ride-request/${rideRequestId}?approval=accept`, null);
  }
  denyRideRequest(rideRequestId: number): Observable<any> {
    return this.http.patch<any>(`${this.baseUrl}/ride-request/${rideRequestId}?approval=reject`, null);
  }
  getRidesByOriginAndDestination(origin:string,destination:string){
    return this.http.get<Ride[]>(`${this.baseUrl}/${origin}/${destination}`)
  }
  loadVehicles(id : number) {
    return this.http.get(`http://localhost:8080/v1/vehicles/user/${id}`)
  }
  rideStatus(rideId:number,status:string):Observable<any>{
    return this.http.patch<any>(`${this.baseUrl}/${rideId}?status=${status}`,null)
  }
}
  