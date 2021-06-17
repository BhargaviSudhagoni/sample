import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DashBoardComponent } from '../dash-board/dash-board.component';
import { ToastNotificationService } from '../toast-notification.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DashBoardComponent>,private toastr: ToastNotificationService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  selectedColor = ""
  color1 = '#FFF07C';
  color2 = '#80FF72';
  color3 = '#7EE8FA';
  color4 = '#EEC0C6';
  color5 = '#E58C8A';
  color6 = '#F4A261';
  onChange(value: any){
    this.selectedColor = value;
  }
  updateNotes(){
    this.dialogRef.close();
    this.showToasterSuccess();
    
  }
  showToasterSuccess() {
    this.toastr.showSuccess('Updated Succesfully!');
  }
}
