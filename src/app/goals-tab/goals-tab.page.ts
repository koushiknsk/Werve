import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-goals-tab',
  templateUrl: './goals-tab.page.html',
  styleUrls: ['./goals-tab.page.scss'],
})
export class GoalsTabPage implements OnInit {
  
  togg:boolean = true;
  count : number = 0
  updateToggleSet(sTog : number ){
    this.count++;
    if(sTog === 1 && this.count%2===1){
      this.togg = false;
    }
    else if(sTog === 1 && this.count%2===0){
      this.togg = true;
    }
  }
 
  pointsEarned : number
  pointsRequired : number

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
