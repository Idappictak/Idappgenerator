import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private userservice:UserService , private route:Router) { }
  user={
    studentname:"",
    email:"",
    gender:"",
    dob:"",
    username:"",
    password:"",
    confpass:"",
    profilepicture:"",
    course:"",
    batch:"",
    phonenumber:"",
    code:"",
  }

  ngOnInit(): void {
  }
  register(){
    this.userservice.adduser(this.user).subscribe((data)=>{console.log(data)})
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Registered !',
      text: 'Email sent.please check!',
      showConfirmButton: false,
      timer: 1500
    })
    this.route.navigate(['studentlogin'])
  }

}
