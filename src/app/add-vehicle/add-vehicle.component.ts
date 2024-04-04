import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrl: './add-vehicle.component.css'
})
export class AddVehicleComponent implements OnInit{

    vehicle= {
    userId:'',
    make:'',
    model:'',
    capacity:'',
    licensePlate:''
  };
  userId:any;
  errorMessage:any;
  constructor(private vehicleService: VehicleService,private _router : Router,private toastr: ToastrService) { }
  ngOnInit(): void {
    this.userId = sessionStorage.getItem('id');
    this.vehicle.userId=this.userId;
  }
  goToDashboard() {
    this._router.navigate(['./dashboard']);
    }
  addVehicle() {
    this.vehicleService.addVehicle(this.vehicle).subscribe({
      next: (response) => {
        this.userId = response.userId;
        this.toastr.success("Vehicle added Successfully")
        this._router.navigate(['./dashboard'])
      },
      error: (error) => {
        console.error('Error adding vehicle:', error);
        this.errorMessage = error.error.message || 'An error occurred while adding vehicle.';
      }
    });

}
}
