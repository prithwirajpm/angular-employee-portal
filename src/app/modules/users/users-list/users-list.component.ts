import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';
import { UserModel } from '../users.model';
import jspdf from 'jspdf';
import autoTable from 'jspdf-autotable';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{

allUsers:UserModel[]=[]
searchKey:string=''
page:number=1;


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

// sort
sortById(){
  this.allUsers.sort((a:any,b:any)=>a.id-b.id)
}

sortBYname(){
  this.allUsers.sort((a:any,b:any)=>a.name.localeCompare(b.name))
}

// downloadPdf
generatePDF(){
  let pdf = new jspdf()
  let head  = [['Id','Username','Email','Status']]
  let body:any = []
  this.allUsers.forEach((item:any)=>{
    body.push([item.id,item.name,item.email,item.active])
  })
  pdf.setFontSize(16)
  pdf.text("All Users List",10,10)
  autoTable(pdf,{head,body})
  pdf.output('dataurlnewwindow')
  pdf.save('alluserlist.pdf')
}
}
