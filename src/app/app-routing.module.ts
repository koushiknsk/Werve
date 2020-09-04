import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'landing-page', loadChildren: './landing-page/landing-page.module#LandingPagePageModule' },
  { path: 'splash', loadChildren: './splash/splash.module#SplashPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'enrollmentp1', loadChildren: './enrollmentp1/enrollmentp1.module#Enrollmentp1PageModule' },
  { path: 'enrollmentp1/:id', loadChildren: './enrollmentp1/enrollmentp1.module#Enrollmentp1PageModule' },
  { path: 'enrollmentp2', loadChildren: './enrollmentp2/enrollmentp2.module#Enrollmentp2PageModule' },
  { path: 'enrollmentp3', loadChildren: './enrollmentp3/enrollmentp3.module#Enrollmentp3PageModule' },
  { path: 'enrollmentp3/:id', loadChildren: './enrollmentp3/enrollmentp3.module#Enrollmentp3PageModule' },
  { path: 'enrollmentp4', loadChildren: './enrollmentp4/enrollmentp4.module#Enrollmentp4PageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'home/:id', loadChildren: './home/home.module#HomePageModule' },
  { path: 'home/home', redirectTo: '/home/member-enrollment/:id', pathMatch: 'full'  },
  { path: 'main-landing-page', loadChildren: './main-landing-p/main-landing-p.module#MainLandingPagePageModule' },
  { path: 'main-landing-page/:id', loadChildren: './main-landing-p/main-landing-p.module#MainLandingPagePageModule' },
  { path: 'goals-tab', loadChildren: './goals-tab/goals-tab.module#GoalsTabPageModule' },
  { path: 'member-enrollment', loadChildren: './member-enrollment/member-enrollment.module#MemberEnrollmentPageModule' },
  { path: 'member-enrollment/:id', loadChildren: './member-enrollment/member-enrollment.module#MemberEnrollmentPageModule' },
  { path: 'rewards-tab', loadChildren: './rewards-tab/rewards-tab.module#RewardsTabPageModule' },
  { path: 'weekly-report', loadChildren: './weekly-report/weekly-report.module#WeeklyReportPageModule' },
  { path: 'weekly-report/:id', loadChildren: './weekly-report/weekly-report.module#WeeklyReportPageModule' },
  { path: 'fitbit', loadChildren: './fitbit/fitbit.module#FitbitPageModule' },
  { path: 'fitbit/:id', loadChildren: './fitbit/fitbit.module#FitbitPageModule' },
  { path: 'try-test', loadChildren: './pages/try-test/try-test.module#TryTestPageModule' },
  { path: 'try-test/:id', loadChildren: './pages/try-test/try-test.module#TryTestPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'fitness-devices', loadChildren: './fitness-devices/fitness-devices.module#FitnessDevicesPageModule' },
  { path: 'fitness-devices/:id', loadChildren: './fitness-devices/fitness-devices.module#FitnessDevicesPageModule' },
  { path: 'get-more-points', loadChildren: './get-more-points/get-more-points.module#GetMorePointsPageModule' },
  { path: 'get-more-points/:id', loadChildren: './get-more-points/get-more-points.module#GetMorePointsPageModule' },
  { path: 'sleep-tracking', loadChildren: './sleep-tracking/sleep-tracking.module#SleepTrackingPageModule' },
  { path: 'nutritionp1', loadChildren: './nutritionp1/nutritionp1.module#Nutritionp1PageModule' },
  { path: 'nutritionp2', loadChildren: './nutritionp2/nutritionp2.module#Nutritionp2PageModule' },
  { path: 'nutritionp3', loadChildren: './nutritionp3/nutritionp3.module#Nutritionp3PageModule' },
  { path: 'sleep-tracking/:id', loadChildren: './sleep-tracking/sleep-tracking.module#SleepTrackingPageModule' },
  { path: 'nutritionp1/:id', loadChildren: './nutritionp1/nutritionp1.module#Nutritionp1PageModule' },
  { path: 'nutritionp2/:id', loadChildren: './nutritionp2/nutritionp2.module#Nutritionp2PageModule' },
  { path: 'nutritionp3/:id', loadChildren: './nutritionp3/nutritionp3.module#Nutritionp3PageModule' },








];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
