import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup} from '@material-ui/core';
import { PMserviceService } from '../pmservice.service';
@Component({
  selector: 'app-update-pip',
  templateUrl: './update-pip.component.html',
  styleUrls: ['./update-pip.component.css']
})
export class UpdatePIPComponent implements OnInit {
 
constructor(private userService:PMserviceService, private router: Router, private route:ActivatedRoute) { }
viewpip:any;

  ngOnInit(): void {
    this.userService.getByPIPId(this.route.snapshot.params.pipId).subscribe((result)=>{
      console.log(result);
      this.viewpip=result;
      console.log(this.route.snapshot.params.pipId);
    })
  }
  updatepip(data:any){
/*   let data={pipResult:this.pipResult} */

this.userService.savePIPResult(this.viewpip.pipId,data).subscribe((result)=>{
      console.log(result);
      alert("updated value :" + data.pipResult);
      window.history.back();
    }) 
   /*  
    console.log(this.viewpip.pipId,data ) */
  }

}
