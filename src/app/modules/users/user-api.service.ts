import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  
  SERVER_URL ="http://localhost:3000"
  constructor(private http:HttpClient) { }
  // add User
  addUserAPI(user:UserModel){
    return this.http.post(`${this.SERVER_URL}/users`,user)

  }
}
