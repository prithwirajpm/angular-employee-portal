import { Component } from '@angular/core';
import { UserApiService } from '../user-api.service';
import { UserModel } from '../users.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
user:UserModel={}
constructor(private api:UserApiService){}
addUser(){
  this.api.addUserAPI(this.user).subscribe({
    next:(res:UserModel)=>{
      console.log(res);
      alert("New user Added Successfully!!!")
      this.router.navigateByUrl('/users')
    },
    error:(err:any)=>{
      alert(err.message)
    }
  })

}

cancel(){
  this.user={}
}
}
