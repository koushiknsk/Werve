import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular'
import { Observable } from 'rxjs';
import { DatabaseService, FitnessDetails} from 'src/app/services/Database.service';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-fitbit',
  templateUrl: './fitbit.page.html',
  styleUrls: ['./fitbit.page.scss'],
})
export class FitbitPage implements OnInit { 
  ftDetails :FitnessDetails ={
    type: 'google',
    date: new Date(),
    steps: '',
    calories: '',
    distance: '',
    sleep: ''  
  }

  isFitbitDataVisible;
  currUserId;
  //private homePageData : Observable<any>
  x : any ={
    id: null,
    isGoogleData : null,
    isFitbitData : null,
    steps: '',
    distance: '',
    calories: '',
    sleep: ''
  }
  constructor(public aRoute : ActivatedRoute, private activatedRoute: ActivatedRoute, private dbService : DatabaseService,private alertCtrl : AlertController,
    private platform : Platform,private location: PlatformLocation){
    this.aRoute.queryParams.subscribe((res)=>{
      this.x = res
      this.currUserId = this.x.id
      this.ftDetails.steps = this.x.steps
      this.ftDetails.distance = this.x.distance
      this.ftDetails.calories = this.x.calories
      this.ftDetails.sleep = this.x.sleep
      console.log(this.currUserId)
    })
    //this.getData()
  }

  ngOnInit() {
    
  }
  async ionViewWillEnter() {
    //this.dbService.printData("ionViewWillEnter - Start")
    await this.getData()
    await this.loadData()
    this.backButtonEvent()
    //this.dbService.printData("ionViewWillEnter - End")
  }

  async gAuth(){
    this.dbService.printData("Start")
    await this.dbService.gAuth()
  }

  async getData(){
    //this.dbService.printData("getData - Start")
    if(this.dbService.isAuthorized){
      await this.dbService.getTSteps()
      // this.dbService.printData("getData - " + this.dbService.steps)
      await this.dbService.getDistance()
      await this.dbService.getCalories()
      // await this.dbService.getSleep()
    }else{
      this.gAuth()
    }
  }

  async loadData(){
    console.log(this.ftDetails)
    if(this.dbService.isAuthorized){
      await this.dbService.addFitnessDetails(this.currUserId,this.ftDetails)
      //this.dbService.printData(JSON.stringify(this.ftDetails))
      //this.dbService.printData("End")
    }
    else{
      await this.dbService.addFitnessDetails(this.currUserId,this.ftDetails)
      this.dbService.printData("Not Authrzd")
    }    
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      this.location.back()    
    });
  }
}
