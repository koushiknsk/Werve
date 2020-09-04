import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [      
      
      { path: 'main-landing-page/:id', loadChildren: '../main-landing-p/main-landing-p.module#MainLandingPagePageModule' },      
      { path: 'goals', loadChildren: '../goals-tab/goals-tab.module#GoalsTabPageModule' },
      { path: 'rewards', loadChildren: '../rewards-tab/rewards-tab.module#RewardsTabPageModule' },
      { path: 'weekly-report/:id', loadChildren: '../weekly-report/weekly-report.module#WeeklyReportPageModule' },
      { path: 'get-more-points/:id', loadChildren: '../get-more-points/get-more-points.module#GetMorePointsPageModule' },
      { path: 'sleep-tracking/:id', loadChildren: '../sleep-tracking/sleep-tracking.module#SleepTrackingPageModule' },
      { path: 'nutritionp1/:id', loadChildren: '../nutritionp1/nutritionp1.module#Nutritionp1PageModule' },
      { path: 'nutritionp2/:id', loadChildren: '../nutritionp2/nutritionp2.module#Nutritionp2PageModule' },
      { path: 'nutritionp3/:id', loadChildren: '../nutritionp3/nutritionp3.module#Nutritionp3PageModule' },
      { path: 'fitness-devices/:id', loadChildren: '../fitness-devices/fitness-devices.module#FitnessDevicesPageModule' },  
      //{ path: 'fitbit/:id', loadChildren: '../fitbit/fitbit.module#FitbitPageModule' },
    ]
  },
  {
    path:'',
    redirectTo: '',
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
  declarations: [HomePage]
})

export class HomePageModule {
  
}
