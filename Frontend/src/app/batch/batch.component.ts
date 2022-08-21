import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeriveService } from '../serive.service';
import { bookModel } from '../batch/bookmodel';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {
  buk:bookModel[]|any;

  constructor(private serve:SeriveService,private route:Router) { }

  ngOnInit(): void {
    this.serve.getbooks().subscribe((data)=>{
      this.buk= JSON.parse(JSON.stringify(data));
  })

}
editProduct(product:any)
  {
    localStorage.setItem("editProductId", product._id);
    this.route.navigate(['update']);

  }

  deleteProduct(product:any)
  {
    this.serve.deleteProduct(product._id)
      .subscribe((data) => {
        this.buk = this.buk.filter((p:any) => p !== product);
        alert("deleted successfully");
      })
  

  }
}

