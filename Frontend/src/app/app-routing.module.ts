import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BmloginComponent } from './bmlogin/bmlogin.component';

const routes: Routes = [
  {path:"", component:MainhomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"forgetpassword",component:ForgetpasswordComponent},
  {path:"studentlogin",component:StudentloginComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"bmlogin",component:BmloginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
