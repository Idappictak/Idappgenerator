import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ForgetpassService {

  constructor(private http:HttpClient) { }

sendmailto(data:any){
  console.log(data)
  return this.http.post<any>('http://localhost:3000/sendmail',{data:data})
   }
}