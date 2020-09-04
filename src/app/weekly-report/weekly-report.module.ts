import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WeeklyReportPage } from './weekly-report.page';

const routes: Routes = [
  {
    path: '',
    component: WeeklyReportPage,
    children: [      
      { path: 'home', loadChildren: '../main-landing-p/main-landing-p.module#MainLandingPagePageModule' },
      { path: 'goals', loadChildren: '../goals-tab/goals-tab.module#GoalsTabPageModule' },
      { path: 'rewards', loadChildren: '../rewards-tab/rewards-tab.module#RewardsTabPageModule' },

    ]
  },
  {
    path:'',
    redirectTo: 'weekly-report/tab1',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WeeklyReportPage]
})
export class WeeklyReportPageModule {}
