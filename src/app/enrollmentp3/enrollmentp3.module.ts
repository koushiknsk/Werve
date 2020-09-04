import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Enrollmentp3Page } from './enrollmentp3.page';

const routes: Routes = [
  {
    path: '',
    component: Enrollmentp3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Enrollmentp3Page]
})
export class Enrollmentp3PageModule {}
