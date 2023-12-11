import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';
import { UserModel } from '../users.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{

allUsers:UserModel[]=[]

constructor(private api:UserApiService){}

ngOnInit(): void {
  this.getallusers()
}


// getUserList
getallusers(){
  console.log("Inside all users");

  this.api.getAllUsersAPI().subscribe({
    next:(res:any)=>{
      console.log(res);
      this.allUsers = res
    },
    error:(err:any)=>{
      alert(err.message)
    }
  })
  
}

// remove UserUSer
removeUser(id:any){
  this.api.deleteUserAPI(id).subscribe({
    next:(res:any)=>{
      console.log(res);
      alert("User Remove successfully")
      this.getallusers()
    },
    error:(err:any)=>{
      alert(err.message)
    }
  })
}
}
