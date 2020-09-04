import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-rewards-tab',
  templateUrl: './rewards-tab.page.html',
  styleUrls: ['./rewards-tab.page.scss'],
})
export class RewardsTabPage implements OnInit {


  constructor(private platform : Platform,private activatedRoute: ActivatedRoute,public router: Router,
    private location: PlatformLocation) {
    
  }
  
  ngOnInit() {
    
  }

  ionViewWillEnter() {
    //this.currUserId = this.activatedRoute.snapshot.paramMap.get('id');
    this.backButtonEvent()
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      this.location.back()    
    });
  }


}
