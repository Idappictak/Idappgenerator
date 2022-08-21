import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BmloginComponent } from './bmlogin/bmlogin.component';
import { HomeComponent } from './home/home.component';
import { Header1Component } from './header1/header1.component';
import { Footer1Component } from './footer1/footer1.component';
import { ApplyComponent } from './apply/apply.component';
import { StatusComponent } from './status/status.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:"", component:MainhomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"forgetpassword",component:ForgetpasswordComponent},
  {path:"studentlogin",component:StudentloginComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"bmlogin",component:BmloginComponent},
  {path:'home',component:HomeComponent,pathMatch: 'full'},
  {path:'header1',component:Header1Component},
  {path:'footer1',component:Footer1Component},
  {path:'appForm',component:ApplyComponent,pathMatch: 'full'},
  {path :'appStatus', component:StatusComponent}
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
