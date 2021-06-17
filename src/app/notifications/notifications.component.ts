import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { PMserviceService } from '../pmservice.service';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
dimensionsForm=new FormGroup({
    dimension_title:new FormControl('',Validators.required),
    dimension_desc:new FormControl('',Validators.required)
    });

addgoalsform=new FormGroup({
      assessmentType: new FormControl('',Validators.required),
      dimensionType: new FormControl('',Validators.required),
      goaltitle:new FormControl('',Validators.required),
      goaldescripsion:new FormControl('',Validators.required)
    });
  constructor(private service:PMserviceService) { }
  get assessmentType(){return this.addgoalsform.get('assessmentType')}
  get dimensionType(){return this.addgoalsform.get('dimensionType')}
  get goaltitle(){return this.addgoalsform.get('goaltitle')}
  get goaldescripsion(){return this.addgoalsform.get('goaldescripsion')}
  get dimension_title(){return this.dimensionsForm.get('dimension_title')}
  get dimension_desc(){return this.dimensionsForm.get('dimension_desc')}


  ngOnInit(): void {
  }
addGoal():any{
let date = new Date();
  let data = {
    dimension_title:this.dimensionsForm.value.dimension_title,
    dimension_desc:this.dimensionsForm.value.dimension_desc,
    created_date:date
  }
  console.log(data)
// this.service.saveGoal(this.addgoalsform.value).subscribe((result)=>{
//       console.log(result);
//     });
this.addgoalsform.reset();
}


addDimension():any{
  this.service.saveDimension(this.dimensionsForm.value).subscribe((result)=>{
      console.log(result);
    });
this.dimensionsForm.reset();
}
}
