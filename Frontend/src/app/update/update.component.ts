import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { bookModel } from '../batch/bookmodel';
import { SeriveService } from '../serive.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  buk:bookModel[]|any;
    constructor(private serve:SeriveService,private route:Router) { }
  
    ngOnInit(): void {
      let productId = localStorage.getItem("editProductId");
     this.serve.getProduct(productId).subscribe((data)=>{
       this.buk=JSON.parse(JSON.stringify(data));
     })
    }
    editProduct()
    {    
      this.serve.editProduct(this.buk);   
      alert("Success");
      this.route.navigate(['batch']);
    }
  }
  