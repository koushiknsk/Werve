import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService, LifestyleDetails, FoodDetails} from 'src/app/services/Database.service'; 
import { PlatformLocation } from '@angular/common';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-enrollmentp3',
  templateUrl: './enrollmentp3.page.html',
  styleUrls: ['./enrollmentp3.page.scss'],
})
export class Enrollmentp3Page implements OnInit {

  currUserId;
  lifeStyleDetails: LifestyleDetails ={
    cigarettes: '',
    alcohol: '',
    feeling: ''
  }
  
  foodDetails: FoodDetails ={
    wholegrains: '',
    dairy: '',
    fruits: '',
    vegetables: '',
    meatAndPoultry: ''
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dbService : DatabaseService,
    private location: PlatformLocation, private platform : Platform) { 
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.currUserId = this.activatedRoute.snapshot.paramMap.get('id');    
    if(this.currUserId !=null){
    this.dbService.getCurrentUserData(this.currUserId).subscribe(currUserData  =>{
      if(currUserData.lifeStyleDetails != null && currUserData.foodDetails != null){
       this.lifeStyleDetails = currUserData.lifeStyleDetails
       this.foodDetails = currUserData.foodDetails
      }
    })
    }
    this.backButtonEvent();
  }

  updateLifestyleFoodData(){
    try{
      //console.log(this.currUserId)
      this.dbService.addLifestyleData(this.currUserId,this.lifeStyleDetails)
      this.dbService.addFoodData(this.currUserId,this.foodDetails)
      this.router.navigate(['/home/main-landing-page',this.currUserId]);
    }catch(e){ 
      console.dir(e);
    }
  }
  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      this.location.back()    
    });
  }
  
}
