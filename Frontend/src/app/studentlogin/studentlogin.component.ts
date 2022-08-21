import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {
  user={
    username:"",
    password:"",
    
  }
  constructor(private userservice:UserService , private route:Router) { }

  ngOnInit(): void {
  }
  loginuser(){
    this.userservice.loginuser(this.user).subscribe((res)=>{
     if(res.status){
      localStorage.setItem('token' , res.token)
      this.route.navigate(['/home'])

        }
       else{
      alert("Username or Password is incorrect")
      window.location.reload();
           }
           
    });
   
  }
 
}




