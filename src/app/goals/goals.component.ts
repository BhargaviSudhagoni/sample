import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { PMserviceService } from '../pmservice.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

 addgoalform=new FormGroup({
      assessmentType: new FormControl('',Validators.required),
      dimensionType: new FormControl('',Validators.required),
      Goal:new FormControl('',Validators.required),
      fromdate:new FormControl('',Validators.required),
      todate:new FormControl('',Validators.required)
    });
  
  get assessmentType(){return this.addgoalform.get('assessmentType')}
  get dimensionType(){return this.addgoalform.get('dimensionType')}
  get Goal(){return this.addgoalform.get('Goal')}
  get fromdate(){return this.addgoalform.get('fromdate')}
  get todate(){return this.addgoalform.get('todate')}

  
  

  ngOnInit(): void {
  }
  

 hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  constructor(calendar: NgbCalendar,private service:PMserviceService) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }


  addgoal():any{
    this.service.saveDimension(this.addgoalform.value).subscribe((result)=>{
      console.log(result);
    });
this.addgoalform.reset();
  }
 
}

