import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MemberEnrollmentPage } from './member-enrollment.page';

const routes: Routes = [
  {
    path: '',
    component: MemberEnrollmentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MemberEnrollmentPage]
})
export class MemberEnrollmentPageModule {}
