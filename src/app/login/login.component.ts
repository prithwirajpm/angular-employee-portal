import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminApiService } from '../services/admin-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string=""
  password:string=""
  constructor(private api:AdminApiService,private router:Router){}

  login(){
    if(this.email && this.password){
      this.api.authenticate().subscribe({
        next:(res:any)=>{
          const {email,password} = res
          if(email===this.email && password===this.password){
            alert("Login successfully")
            // navigate to dashboard
            this.router.navigateByUrl("dashboard")
          }else{
            alert("Invalid email/password")
          }
        },
        error:(res:any)=>{
          alert(res.message);
        }

      })
    }else{
      alert("Please fill the form completely")
    }
  }

}
