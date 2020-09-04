import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Enrollmentp1Page } from './enrollmentp1.page';

const routes: Routes = [
  {
    path: '',
    component: Enrollmentp1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Enrollmentp1Page]
})
export class Enrollmentp1PageModule {}
