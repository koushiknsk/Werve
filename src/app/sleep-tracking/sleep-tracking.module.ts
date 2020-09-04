import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SleepTrackingPage } from './sleep-tracking.page';

const routes: Routes = [
  {
    path: '',
    component: SleepTrackingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SleepTrackingPage]
})
export class SleepTrackingPageModule {}
