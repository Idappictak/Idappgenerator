import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { ApplyComponent } from './apply/apply.component';
import { Footer1Component } from './footer1/footer1.component';
import { Header1Component } from './header1/header1.component';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';
import { RouterModule } from '@angular/router';
import { StudentService } from './student.service';
import { BatchComponent } from './batch/batch.component';
import { ConfirmcheckComponent } from './confirmcheck/confirmcheck.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewComponent } from './new/new.component';
import { UpdateComponent } from './update/update.component';
import { SeriveService } from './serive.service';
import { AddressComponent } from './address/address.component';
import { ApplnsComponent } from './applns/applns.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterbmComponent } from './footerbm/footerbm.component';
import { HeaderbmComponent } from './headerbm/headerbm.component';
import { HistoryComponent } from './history/history.component';
import { HomebmComponent } from './homebm/homebm.component';
import { PhoneComponent } from './phone/phone.component';

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
    ApplyComponent,
    Footer1Component,
    Header1Component,
    HomeComponent,
    StatusComponent,
    BatchComponent,
    ConfirmcheckComponent,
    HomeadminComponent,
    NavbarComponent,
    NewComponent,
    UpdateComponent,
    AddressComponent,
    ApplnsComponent,
    ContactsComponent,
    FooterbmComponent,
    HeaderbmComponent,
    HistoryComponent,
    HomebmComponent,
    PhoneComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
   
  ],
 
  providers: [ UserService,StudentService,SeriveService, HttpClient,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
