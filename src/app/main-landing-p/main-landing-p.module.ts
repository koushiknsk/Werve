import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Component, OnInit} from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { MainLandingPagePage } from './main-landing-p.page';
import { NgCircleProgressModule } from 'ng-circle-progress';



const routes: Routes = [
  {
    path: '',
    component: MainLandingPagePage
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),    
    NgCircleProgressModule.forRoot({}),
    
  ],
  declarations: [MainLandingPagePage]
})
export class MainLandingPagePageModule implements OnInit{
  ngOnInit() {    
  }
  constructor(){      
  }
      
}
