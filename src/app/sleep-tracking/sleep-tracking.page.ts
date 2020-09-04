import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-sleep-tracking',
  templateUrl: './sleep-tracking.page.html',
  styleUrls: ['./sleep-tracking.page.scss'],
})
export class SleepTrackingPage implements OnInit {

  currUserId;
  constructor(private platform : Platform,private activatedRoute: ActivatedRoute,public router: Router,
    private location: PlatformLocation) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.currUserId = this.activatedRoute.snapshot.paramMap.get('id');    
    this.backButtonEvent()
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      this.location.back()    
    });
  }

}
