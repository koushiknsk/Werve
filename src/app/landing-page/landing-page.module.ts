import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LandingPagePage } from './landing-page.page';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: LandingPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [LandingPagePage]
})
export class LandingPagePageModule {}
