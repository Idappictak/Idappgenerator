import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeriveService } from '../serive.service';
import { bookModel } from '../batch/bookmodel';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private serve:SeriveService,private route:Router) { }
  bookItem =new bookModel ( "" , "", "", "" , "","");

  ngOnInit(): void {
  }
  register(){
    this.serve.addbooks(this.bookItem);
    console.log("item added");
    alert ("item is added");
    this.route.navigate(["batch"]);
    
    }

}
  
