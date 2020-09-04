import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Nutritionp3Page } from './nutritionp3.page';

const routes: Routes = [
  {
    path: '',
    component: Nutritionp3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Nutritionp3Page]
})
export class Nutritionp3PageModule {}
