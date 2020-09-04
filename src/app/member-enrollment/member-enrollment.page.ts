import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService, MemberEnrollment} from 'src/app/services/Database.service'; 
import { Platform, AlertController } from '@ionic/angular';
//import { DatabaseService} from 'src/app/services/Database.service'; 
@Component({
  selector: 'app-member-enrollment',
  templateUrl: './member-enrollment.page.html',
  styleUrls: ['./member-enrollment.page.scss'],
})
export class MemberEnrollmentPage implements OnInit {
  currUserId: string
  memEnroll: MemberEnrollment={
    insPolicyNumber: '',
    dob:'',
    email: '',
    gender:'',
    mobileNo:''
  }

  lastTimeBackPress = 0;
  timePeriodToExit = 2000;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private userService : DatabaseService,
    private platform : Platform, private alertController : AlertController) { 
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.currUserId = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.currUserId !=null){
      this.userService.getCurrentUserData(this.currUserId).subscribe(currUserData  =>{
        if(currUserData.memEnrollment != null)
        this.memEnroll = currUserData.memEnrollment
      })
    }

    this.backButtonEvent();
  }

  updateMemEnrollData(){
    try{
      //We can check if this.memEnroll  is null just to verify if we have data or not
      // if we have data then we will proceed to next page w/o any updates else we will update data
      //console.log(this.currUserId)
      this.userService.addMemEnrollData(this.currUserId,this.memEnroll)
      this.router.navigate(['/enrollmentp1',this.currUserId]);
      //this.router.navigate(['/home/home',this.currUserId]);
    }catch(e){ 
      console.dir(e);
    }
  }

  backButtonEvent() {    
    //this.dbService.printData("inside bb");
    this.platform.backButton.subscribeWithPriority(0, () => {
      if (this.router.url.includes("/home/main-landing-page")) {
        if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
          this.lastTimeBackPress = new Date().getTime();
          this.presentAlertConfirm();
        } else {
          navigator['app'].exitApp();
        }
      }      
    });    
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want to exit the app?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {}
      }, {
        text: 'Close App',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    });
  
    await alert.present();
  }
}
