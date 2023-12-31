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

  // get all User
  getAllUsersAPI(){
    return this.http.get(`${this.SERVER_URL}/users`)

  }
// delete User
  deleteUserAPI(id:string){
    return this.http.delete(`${this.SERVER_URL}/users/${id}`)

  }

  // viewUserApi
  viewUserAPI(id:any){
    return this.http.get(`${this.SERVER_URL}/users/${id}`)

  }

  // editUser api
  updateUserAPI(id:any,user:UserModel){
    return this.http.put(`${this.SERVER_URL}/users/${id}`,user)

  }

}
