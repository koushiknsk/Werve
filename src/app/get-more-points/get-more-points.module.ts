import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GetMorePointsPage } from './get-more-points.page';

const routes: Routes = [
  {
    path: '',
    component: GetMorePointsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GetMorePointsPage]
})
export class GetMorePointsPageModule {}
