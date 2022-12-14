import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-bmlogin',
  templateUrl: './bmlogin.component.html',
  styleUrls: ['./bmlogin.component.css']
})
export class BmloginComponent implements OnInit {

  user={
    username:"",
    password:"",
    
  }

  constructor(private userservice:UserService , private route:Router) { }

  ngOnInit(): void {
  }
  loginbm(){
    this.userservice.loginbm(this.user).subscribe((res)=>{
     if(res.status){
      localStorage.setItem('token' , res.token)
      this.route.navigate(['/homebm'])
        }
       else{
      alert("Username or Password is incorrect")
      window.location.reload();
           }
           
    });
   
  }
 
}



