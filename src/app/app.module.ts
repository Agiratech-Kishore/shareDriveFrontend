import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateRideComponent } from './create-ride/create-ride.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { ProfileComponent } from './profile/profile.component';
import { RideRequestComponent } from './ride-request/ride-request.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { authInterceptorProviders } from './auth.interceptor';
import { NgxUiLoaderHttpModule ,NgxUiLoaderModule } from 'ngx-ui-loader';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HistoryComponent } from './history/history.component';
import { AuthGuardService } from './auth-guard.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    CreateRideComponent,
    AddVehicleComponent,
    ProfileComponent,
    RideRequestComponent,
    HeaderComponent,
    FooterComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground : true
    })
  ],
  providers: [ ToastrService,
  authInterceptorProviders,
AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
