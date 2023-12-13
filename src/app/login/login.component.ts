import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminApiService } from '../services/admin-api.service';
import { ToasterService } from '../services/toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string=""
  password:string=""
  constructor(private api:AdminApiService,private router:Router,private toastr:ToasterService){}

  login(){
    if(this.email && this.password){
      this.api.authenticate().subscribe({
        next:(res:any)=>{
          const {email,password} = res
          if(email===this.email && password===this.password){
            // saved admin
            localStorage.setItem("admin_name",res.name)
            localStorage.setItem("admin_pswd",res.password)
            this.toastr.showSuccess("Login successfully")
            // navigate to dashboard
            this.router.navigateByUrl("dashboard")
          }else{
            this.toastr.showWaring("Invalid email/password")
          }
        },
        error:(res:any)=>{
          this.toastr.showError(res.message);
        }

      })
    }else{
      alert("Please fill the form completely")
    }
  }

}
