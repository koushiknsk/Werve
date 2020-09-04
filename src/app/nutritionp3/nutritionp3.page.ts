import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-nutritionp3',
  templateUrl: './nutritionp3.page.html',
  styleUrls: ['./nutritionp3.page.scss'],
})
export class Nutritionp3Page implements OnInit {

  currUserId;
  constructor(private platform : Platform,private activatedRoute: ActivatedRoute,public router: Router) {
    //this.backButtonEvent()
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.currUserId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  backButtonEvent() {    
    //console.log(this.router.url)
    this.platform.backButton.subscribeWithPriority(0, () => {
      if(this.router.url.includes("/home/nutritionp3")){
        this.router.navigate(['/home/nutritionp2',this.currUserId]);      
      }          
    });
  }
}
