import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeriveService {
  getcourses() {
    throw new Error('Method not implemented.');
  }

  item= {
    
    name:'',
    ID:'',
    Password:'',
    Course:'',
    Batch:''}
  constructor(public http:HttpClient) {
      
  }

//  onsubmit(user:any){

//     return this.http.post<any>("https://arya-ass3-librarybackend.herokuapp.com/login",user)
//     }

    getbooks(){
      return  this.http.get("http://localhost:3000/batch");
      };

      
    //  loggedin(){
    //   return !!localStorage.getItem('token')
    // }

    addbooks=(item:any)=>{
      return  this.http.post("http://localhost:3000/new",{item})
     .subscribe((data=>{console.log(data)}));
    }
    
    getProduct(id:any){
      return this.http.get("http://localhost:3000/"+id);
    }
    editProduct(product:any)
  {
        
    console.log('client update')
    return this.http.put("http://localhost:3000/update",product)
    .subscribe(data =>{console.log(data)})

  }

  deleteProduct(id:any)
  {

    return this.http.delete("http://localhost:3000/remove/"+id)                                                                                                                                                                                                                                                                                                                                       

  }
  getCourses(){                                                                                                                                                                                                                                                                                                                                      
    return this.http.get("http://localhost:3000/")
  }
  Course(data:any){
    console.log(data)
    return this.http.post("http://localhost:3000/courseaction",data)
  }
  Batch(data:any){
    console.log(data)
    return this.http.post("http://localhost:3000/batchaction",data)
  }
 
  }

  
