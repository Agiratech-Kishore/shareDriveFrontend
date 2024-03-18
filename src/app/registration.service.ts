import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  public registerUserFromRemote(user: User):Observable<any> {
    return this._http.post<any>("http://localhost:8080/users",user);
  }

  constructor(private _http : HttpClient) { }
  public loginUserFromRemote(user :User):Observable<any>{
   return this._http.post<any>("http://localhost:8080/users/login",user)
  }
}
