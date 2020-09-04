import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-nutritionp2',
  templateUrl: './nutritionp2.page.html',
  styleUrls: ['./nutritionp2.page.scss'],
})
export class Nutritionp2Page implements OnInit {

  currUserId;
  constructor(private platform : Platform,private activatedRoute: ActivatedRoute,public router: Router) {
    //this.backButtonEvent()
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.currUserId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  goToNutritionPage3(){
    this.router.navigate(['home/nutritionp3',this.currUserId]);
  }

  backButtonEvent() {    
    //console.log(this.router.url)
    this.platform.backButton.subscribeWithPriority(0, () => {
      if(this.router.url.includes("/home/nutritionp2")){
        this.router.navigate(['/home/nutritionp1',this.currUserId]);      
      }          
    });
  }

}
