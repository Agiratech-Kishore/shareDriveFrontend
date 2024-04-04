import{ User } from './user';
import{ Ride } from './ride';
export interface RideRequest {
  id: number;
  ride: Ride; 
  requester: User; 
  status: string;
  userName:string;
  userAge:number;
  userEmail:string;
  userMobile:string;
  rideDetails?: any;
}
