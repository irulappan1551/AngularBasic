import { LastComponent } from './last/last.component';
import { NotuserComponent } from './notuser/notuser.component';
import { MypageComponent } from './mypage/mypage.component';
import { HomComponent } from './hom/hom.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',component:HomComponent},
  {path:'login',component:LoginComponent,canActivate:[AuthGuard]},
  {path:'success',component:MypageComponent},
  {path:'fail',component:NotuserComponent},
  {path:'last',component:LastComponent},


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
