import { Component, OnInit } from '@angular/core';
import {AngularFireAuth } from '@angular/fire/auth';
import {auth} from'firebase/app';
import { Router } from '@angular/router';
import { DatabaseService, Users} from 'src/app/services/Database.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username : string;
  password : string;

  constructor(public afAuth : AngularFireAuth, private router: Router, private userService : DatabaseService,
    private alertController : AlertController) { 
  }

  ngOnInit() {
  }

  async login(){
    const {username, password} = this
    try{
      const res  = await this.afAuth.auth.signInWithEmailAndPassword(username,password)      
      if(res != null){  
        this.userService.getCurrentUserData(res.user.uid).subscribe((user)=>{
          //onsole.log(user.memEnrollment.mobileNo)
          if(user.memEnrollment != null){
            if(user.memEnrollment.mobileNo!="")
            this.router.navigate(['home/main-landing-page',res.user.uid]);
            else
            this.router.navigate(['/member-enrollment',res.user.uid]);
          }
          else
            this.router.navigate(['/member-enrollment',res.user.uid]);
        })
        //console.log(this.userService.getUser(res.user.uid))
      }
    }catch(e){
      if(e.code == "auth/invalid-email" || "auth/user-not-found"){
        this.presentAlertConfirm()
      }
      console.dir(e);
    }
  }

  redirectToRegiister(){
    this.router.navigate(['/register']);
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      //header: 'Confirm!',
      message: 'Entered username or password is invalid',
      buttons: [{
        text: 'ok',
        handler: () => {}
      }]
    });
  
    await alert.present();
  }

}
