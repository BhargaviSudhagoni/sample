import { Component, OnInit } from '@angular/core';
import { AddCommentOutlined } from '@material-ui/icons';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddnotesComponent } from '../popUps/addnotes/addnotes.component';
import { ToastNotificationService } from '../toast-notification.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
  styles: [
    `
  .mat-card:not([class*=mat-elevation-z0]):hover{
   box-shadow: 0 2px 1px -1px rgba(0,0,0,1), 
   0 1px 1px 0 rgba(0,0,0,1), 
   0 1px 3px 0 rgba(0,0,0,1); 
`,
  ],
})
export class DashBoardComponent implements OnInit {
  public images = [
    { path: this.generateImageUrl() },
    { path: this.generateImageUrl() },
    { path: this.generateImageUrl() },
    { path: this.generateImageUrl() },
  ];
  percentValue!: number;
  rating: any;
  showProgress = true;
  showAssigned = true;
  showCompleted = true;
  title = 'prasana';

  toggleStart() {
    this.showProgress = !this.showProgress;
  }
  toggleassigned() {
    this.showAssigned = !this.showAssigned;
  }
  toggleCompleted() {
    this.showCompleted = !this.showCompleted;
  }
  constructor(
    private adddailog: MatDialog,
    private toastr: ToastNotificationService,
    config: NgbCarouselConfig
  ) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
  }

  public handleDeleteImage(indexToDelete: number): void {
    this.images = this.images.filter((image, index) => index !== indexToDelete);
  }

  public handleAddImage(): void {
    this.images.push({
      path: this.generateImageUrl(),
    });
  }
  public generateImageUrl(): string {
    return `https://via.placeholder.com/200/${this.generateRandomHexColor()}`;
  }

  public generateRandomHexColor(): string {
    return Math.floor(Math.random() * 16777215).toString(16);
  }
  ngOnInit(): void {
    this.percentValue = 4;

    if (this.percentValue == 5) {
      this.rating = 100;
    } else if (this.percentValue == 4) {
      this.rating = 80;
    } else if (this.percentValue == 3) {
      this.rating = 60;
    } else if (this.percentValue == 2) {
      this.rating = 40;
    } else {
      this.rating = 0;
    }
  }
  addNote() {
    this.adddailog.open(AddnotesComponent, { width: '670px' });
  }

  showToasterError() {
    this.toastr.showError('Deleted Succesfully!');
  }
  showToasterSuccess() {
    this.toastr.showSuccess('Copied Succesfully!');
  }
  updateNote() {
    this.adddailog.open(UpdateNoteComponent, {
      width: '670px',
      data: { name: this.title },
    });
  }
}
