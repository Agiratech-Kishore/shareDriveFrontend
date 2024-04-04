import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
  public apiUrl = "http://localhost:8080/v1/users";

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    
  }
  getUserById(id:number){
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
