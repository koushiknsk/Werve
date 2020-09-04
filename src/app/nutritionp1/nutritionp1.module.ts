import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Nutritionp1Page } from './nutritionp1.page';

const routes: Routes = [
  {
    path: '',
    component: Nutritionp1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Nutritionp1Page]
})
export class Nutritionp1PageModule {}
