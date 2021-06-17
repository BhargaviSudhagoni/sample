import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DashBoardComponent } from 'src/app/dash-board/dash-board.component';
import { ToastNotificationService } from 'src/app/toast-notification.service';

@Component({
  selector: 'app-addnotes',
  templateUrl: './addnotes.component.html',
  styleUrls: ['./addnotes.component.css']
})
export class AddnotesComponent implements OnInit {

 
  constructor(
    private toastr: ToastNotificationService, public dialogRef: MatDialogRef<DashBoardComponent>
  ) { }

  ngOnInit(): void {
  }
  selectedColor = '';
  color1 = '#FFF07C';
  color2 = '#80FF72';
  color3 = '#7EE8FA';
  color4 = '#EEC0C6';
  color5 = '#E58C8A';
  color6 = '#F4A261';
  onChange(value: any){
    this.selectedColor = value;
  }
  addNotes(){
    this.dialogRef.close();
   this.showToasterSuccess();}
    showToasterSuccess() {
        this.toastr.showSuccess('Added Succesfully!');
      }
}
