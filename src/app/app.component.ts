import { Component, ViewChildren, QueryList } from '@angular/core';

import { Platform, IonRouterOutlet, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
   @ViewChildren(IonRouterOutlet) routerOutlets: QueryList < IonRouterOutlet > ;
  //@ViewChildren(IonRouterOutlet) routerOutlet: IonRouterOutlet;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertController : AlertController,
    public router: Router
  ) {
    //console.log("app comp")
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //this.registerBackButtonEvent();
    });
    
  }

  // backButtonEvent() {
  //   this.platform.backButton.subscribeWithPriority(0, () => {      
  //       if (this.routerOutlet && this.routerOutlet.canGoBack) {
  //         const alert = this.alertController.create({
  //           message: 'inRO',
  //         })
  //         this.routerOutlet.pop()
  //       } else if (this.router.url.includes("/home/main-landing-page")) {
  //         if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
  //           this.lastTimeBackPress = new Date().getTime();
  //           this.presentAlertConfirm();
  //         } else {
  //           navigator['app'].exitApp();
  //         }
  //       } else{
  //         const alert = this.alertController.create({
  //           message: 'RoF',
  //         })
  //       }    
  //   });
  // }
  registerBackButtonEvent() {
    this.platform.backButton.subscribe((e)=>{
      e.register(999,async()=>{
        const outlet:any = this.routerOutlets.first;
        const activeView = outlet.activated.instance; // the active view instance          
        //now calls the onBackButtonPress function in that instance            
        activeView.onBackButtonPress();
        // if(activeView.onBackButtonPress){
        //   activeView.onBackButtonPress();                 
        // }else {
        //   //some logic about what to do if onBackButtonPress is not defined, default action       
        // }
      })
    })
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      // header: 'Confirm!',
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
