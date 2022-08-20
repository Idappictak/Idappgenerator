import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
 
  adduser(data:any){
    return this.http.post<any>("http://localhost:3000/adduser" , {data:data})
  }
  loginuser(data:any){
    return this.http.post<any>("http://localhost:3000/login" , {data:data})
  }
  loginadmin(data:any){
    return this.http.post<any>("http://localhost:3000/adminlogin" , {data:data})
  }
  loginbm(data:any){
    return this.http.post<any>("http://localhost:3000/bmlogin" , {data:data})
  }
  logedIn(){
    return !!localStorage.getItem("token")
  }
  sendMail(url:any,data:any){
    return this.http.post(url,data)
  }

  gettoken(){
    return localStorage.getItem("token")
  }
  
}
