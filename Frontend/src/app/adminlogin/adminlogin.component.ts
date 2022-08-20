import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  user={
    username:"",
    password:"",
    
  }

  constructor(private userservice:UserService , private route:Router) { }

  ngOnInit(): void {
  }
  loginadmin(){
    this.userservice.loginadmin(this.user).subscribe((res)=>{
     if(res.status){
      localStorage.setItem('token' , res.token)
      this.route.navigate(['login'])
        }
       else{
      alert("Username or Password is incorrect")
      window.location.reload();
           }
           
    });
   
  }
 
}


