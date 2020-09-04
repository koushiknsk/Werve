import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RewardsTabPage } from './rewards-tab.page';

const routes: Routes = [
  {
    path: '',
    component: RewardsTabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RewardsTabPage]
})
export class RewardsTabPageModule {}
