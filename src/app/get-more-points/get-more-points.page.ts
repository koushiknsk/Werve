import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-get-more-points',
  templateUrl: './get-more-points.page.html',
  styleUrls: ['./get-more-points.page.scss'],
})
export class GetMorePointsPage implements OnInit {

  currUserId;
  constructor(private activatedRoute: ActivatedRoute,public router: Router,
    private platform : Platform,private location: PlatformLocation) {
    
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.currUserId = this.activatedRoute.snapshot.paramMap.get('id');
    this.backButtonEvent()
  }

  goToSleepPage(){
    this.router.navigate(['home/sleep-tracking',this.currUserId]);
  }

  goToNutritionPage1(){
    this.router.navigate(['home/nutritionp1',this.currUserId]);
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      this.location.back()    
    });
  }

}
