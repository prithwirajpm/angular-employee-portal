import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './modules/users/add-user/add-user.component';

const routes: Routes = [
  { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
  // http://localhost:4200/
  {
    path:'',component:LoginComponent
  },
  // http://localhost:4200/dashboard
  {
    path:'dashboard',component:HomeComponent
  },
  {
    path:'add-user',component:AddUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
