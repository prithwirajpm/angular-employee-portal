import { Component } from '@angular/core';
import { UserApiService } from '../modules/users/user-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  selected: Date | null = new Date()
  showSider:boolean = true

  constructor(private api:UserApiService){
    ngOnInit(): void{

    }
  }

  menuBtnClick(){
    this.showSider =!this.showSider
  }
}
