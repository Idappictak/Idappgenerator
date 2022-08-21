import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @ViewChild('content', {static: false}) el!: ElementRef;
  makePDF(){
    let pdf = new jsPDF('p','pt','a2');
    pdf.html(this.el.nativeElement,{
      callback: (pdf)=> {
      pdf.save("demo.pdf");
      }
    });
  }
  constructor() { }

  ngOnInit(): void {
  }

}