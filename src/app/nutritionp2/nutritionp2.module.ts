import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Nutritionp2Page } from './nutritionp2.page';

const routes: Routes = [
  {
    path: '',
    component: Nutritionp2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Nutritionp2Page]
})
export class Nutritionp2PageModule {}
