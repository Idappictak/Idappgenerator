import { Component, OnInit } from '@angular/core';
import { SeriveService } from '../serive.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmcheck',
  templateUrl: './confirmcheck.component.html',
  styleUrls: ['./confirmcheck.component.css']
})
export class ConfirmcheckComponent implements OnInit {
  Types = ['Course', 'Batch'];
  array: any;
  courses: any;
  batches: any;
  select: any;
  data = {
    add: '',
    type: '',
  };
  private _admin: any;

  constructor(private serve:SeriveService,private route:Router) { }

  ngOnInit(): void {
    this.serve.getCourses().subscribe((data:any) => {
      this.array = JSON.parse(JSON.stringify(data));
      this.courses = this.array[0].course;
      this.batches = this.array[0].batch;
    });
  }

  valuechange(newValue: any) {
    this.data.type = newValue;
    if (this.data.type == 'Batch') {
      this.select = this.batches;
    } else {
      this.select = this.courses;
    }
    console.log(newValue);
  }

  displayStyle1 = 'none';
  displayStyle2 = 'none';

   openPopup1() {
     this.displayStyle1 = 'block';
   }
   closePopup1() {
     this.displayStyle1 = 'none';
   }
   openPopup2() {
     this.displayStyle2 = 'block';
   }
   closePopup2() {
     this.displayStyle2 = 'none';
   }

  save() {
    if (this.data.type == 'Batch') {
      this.batches.push(this.data.add);
      this._admin.Batch(this.batches).subscribe(()=>{
        window.location.reload()
      })

    } else {
      this.courses.push(this.data.add);
      this._admin.Course(this.courses).subscribe(()=>{
        window.location.reload()
      })
    }
  }

  delete() {
    if (this.data.type == 'Course') {
      let index = this.courses.indexOf(this.data.add);
      this.courses.splice(index,1)
      this._admin.Course(this.courses).subscribe(()=>{
        window.location.reload()
      })
      
    } else {
      let index = this.batches.indexOf(this.data.add);
      this.batches.splice(index,1)
      this._admin.Batch(this.batches).subscribe(()=>{
        window.location.reload()
      })
    }
  }
}
  


