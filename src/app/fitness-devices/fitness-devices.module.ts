import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FitnessDevicesPage } from './fitness-devices.page';

const routes: Routes = [
  {
    path: '',
    component: FitnessDevicesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FitnessDevicesPage]
})
export class FitnessDevicesPageModule {}
