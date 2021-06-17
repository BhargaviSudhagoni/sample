import { Component, OnInit } from '@angular/core';
import { PMserviceService } from '../pmservice.service';
@Component({
  selector: 'app-pip',
  templateUrl: './pip.component.html',
  styleUrls: ['./pip.component.css']
})
export class PipComponent implements OnInit {
  pipSave:any=[];
  constructor(private pipService:PMserviceService) { }

  ngOnInit(): void {
    this.pipService.getPIPByEmpId(1).subscribe((result)=>{console.log(result)
      this.pipSave=result;
  }
    )}
   
}
