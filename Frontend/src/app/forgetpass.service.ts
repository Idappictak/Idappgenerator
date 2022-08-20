import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ForgetpassService {

  constructor(private http:HttpClient) { }
//   forgetpass(data:any){
//     return this.http.post<any>("http://localhost:3000/forgetpass" , {data:data})
//   }
// }
// sendMail(form: any) {
//   this.http.post<any>(`${this.url}/sendmail`, form, this.httpOptions).subscribe(
//     (responseValue) => console.log(responseValue),
//     (responseError) => console.error("POST call in error", responseError)
//   );
// }
// }
// sendMail(user:any){
//   console.log('helo service')
//   console.log(user)
//   return this.http.post<any>("http://localhost:3000/forgetpass",user).subscribe(
//   data => {
//       console.log("POST Request is successful ", data);
//   },
//   error => {
//       console.log("Error", error);
//   }
// ); 
// }
sendmailto(data:any){
  console.log(data)
  return this.http.post<any>('http://localhost:3000/sendmail',{data:data})
   }
}