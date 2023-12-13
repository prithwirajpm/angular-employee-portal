import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/services/toaster.service';
import { UserApiService } from '../user-api.service';
import { UserModel } from '../users.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
user:UserModel={}
constructor(private api:UserApiService,private router:Router,private toster:ToasterService){}
addUser(){
  this.api.addUserAPI(this.user).subscribe({
    next:(res:UserModel)=>{
      console.log(res);
      this.toster.showSuccess("New user Added Successfully!!!")
      this.router.navigateByUrl('/users')
    },
    error:(err:any)=>{
      this.toster.showError(err.message)
    }
  })

}

cancel(){
  this.user={}
}
}
