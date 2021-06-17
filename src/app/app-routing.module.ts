import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { GoalsComponent } from './goals/goals.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PipComponent } from './pip/pip.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CoursesComponent } from './courses/courses.component';
import { UpdatePIPComponent } from './update-pip/update-pip.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
const routes: Routes = [
{
    component:ProfileComponent,
    path:'profile'
  },
  {
    component:DashBoardComponent,
    path:''
  },
  {
    component:CoursesComponent,
    path:'profile/courses'
  },
  {
    component:ReviewsComponent,
    path:'reviews'
  },
  {
    component:NotificationsComponent,
    path:'notifications'
  },
  {
    component:PipComponent,
    path:'pip'
  },
  {
    component:GoalsComponent,
    path:'goal'
  },
  {
    component:UpdatePIPComponent,
    path:'pip/updatePIP/:pipId'
  },
  {
    component:ChangePasswordComponent,
    path:'profile/changePassword'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
