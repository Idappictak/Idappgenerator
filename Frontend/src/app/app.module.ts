import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { UserService } from './user.service';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BmloginComponent } from './bmlogin/bmlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    MainhomeComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    ForgetpasswordComponent,
    StudentloginComponent,
    AdminloginComponent,
    BmloginComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   
   
  ],
 
  providers: [ UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
