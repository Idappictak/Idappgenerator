import { Component, OnInit } from '@angular/core';
import { ForgetpassService } from '../forgetpass.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

constructor(private forgetpassservice: ForgetpassService , private route:Router) { }
   user={
      email:"",
    }
  ngOnInit(): void {
  }
  sendmail(){
  this.forgetpassservice.sendmailto(this.user).subscribe((data)=>{console.log(data)})
     
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Email sent.please check!',
        showCloseButton: true,
        timer: 1500
      })
      this.route.navigate(['studentlogin'])
    } 
        
        
 }
