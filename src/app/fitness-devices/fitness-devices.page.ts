import { Component, OnInit } from '@angular/core';
import { DatabaseService} from 'src/app/services/Database.service';
import { Router } from '@angular/router';
import { Platform} from '@ionic/angular'
import { ActivatedRoute  } from '@angular/router';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-fitness-devices',
  templateUrl: './fitness-devices.page.html',
  styleUrls: ['./fitness-devices.page.scss'],
})
export class FitnessDevicesPage implements OnInit {

  currUserId;

  constructor(private activatedRoute: ActivatedRoute, public router: Router,private platform : Platform, private dbService : DatabaseService,
    private location: PlatformLocation) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.currUserId = this.activatedRoute.snapshot.paramMap.get('id');
    this.backButtonEvent()
  }

  async authorize(){
    let firstEntry : boolean 
    this.dbService.getCurrentUserData(this.currUserId).subscribe((cuData)=>{
      firstEntry = cuData.firstEntry
    })
    //console.log(this.platform.is('cordova'))
    let count = 0
    let fitnessData ={
      id: this.currUserId,
      isGoogleData: true,
      isFitbitData: false,
      steps: '123',
      distance: '',
      calories: '',
      sleep: ''
    }

    if(this.platform.is('cordova')){      
      if(!this.dbService.isAuthorized){
        this.dbService.gAuth()
        firstEntry = false
      }
      if(this.dbService.isAuthorized){
        await this.dbService.getTSteps()
        await this.dbService.getDistance()
        await this.dbService.getCalories()
      }
      if(this.dbService.steps != null){        
        fitnessData.steps = this.dbService.steps
        fitnessData.distance = this.dbService.distance
        fitnessData.calories = this.dbService.calories
        this.router.navigate(['fitbit'],{
          queryParams: fitnessData,
        });
      }
    }
    else{
      console.log(fitnessData)
      this.router.navigate(['fitbit'],{
        queryParams: fitnessData,
      });
    }
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      //this.location.back()    
      this.router.navigate(['home/main-landing-page',this.currUserId]);
    });
  }

}
