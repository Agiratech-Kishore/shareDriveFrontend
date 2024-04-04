import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }
  addVehicle(vehicleDetails:any):Observable<any>{
    return this.http.post('http://localhost:8080/v1/vehicles',vehicleDetails)
  }
}
