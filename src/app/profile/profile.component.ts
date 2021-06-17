import { Component, OnInit } from '@angular/core';
import { PMserviceService } from '../pmservice.service';
import {User} from '../user'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService:PMserviceService) { }
save:any=[];
empSkill:any=[];
saveManager:any=[];
showdiv=true;
showmainDiv=false;
  ngOnInit(): void {
 this.userService.getProfileById(1).subscribe((result)=>{console.log(result)
  this.save=result;
  this.userService.getProfileById(this.save.mgrEmpId).subscribe((result1)=>{
    console.log(result1)
    this.saveManager=result1;
  }
 )
 })

}
changePassword(){
   this.showdiv=false;
   this.showmainDiv=true;
}
}