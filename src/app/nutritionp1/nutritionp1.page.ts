import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-nutritionp1',
  templateUrl: './nutritionp1.page.html',
  styleUrls: ['./nutritionp1.page.scss'],
})
export class Nutritionp1Page implements OnInit {

  currUserId;
  constructor(private platform : Platform,private activatedRoute: ActivatedRoute,public router: Router) {
    //this.backButtonEvent()
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.currUserId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  goToNutritionPage2(){
    this.router.navigate(['home/nutritionp2',this.currUserId]);
  }

  // backButtonEvent() {    
  //   //console.log(this.router.url)
  //   this.platform.backButton.subscribeWithPriority(0, () => {
  //     if(this.router.url.includes("/home/nutritionp1")){
  //       this.router.navigate(['/home/get-more-points',this.currUserId]);      
  //     }          
  //   });
  // }

}
