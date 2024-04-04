import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { CreateRideComponent } from './create-ride/create-ride.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { ProfileComponent } from './profile/profile.component';
import { RideRequestComponent } from './ride-request/ride-request.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'create-ride',component:CreateRideComponent},
  {path:'add-vehicle',component:AddVehicleComponent},
  {path:'profile',component:ProfileComponent},
  {path:'ride-request',component:RideRequestComponent},
  {path:'history',component:HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
