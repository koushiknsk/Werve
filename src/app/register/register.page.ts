import { Component, OnInit } from '@angular/core';
import {AngularFireAuth } from '@angular/fire/auth';
import {auth} from'firebase/app';
import { Router } from '@angular/router';
//import { DatabaseService, CmpObj, User} from 'src/app/services/Database.service';
import { DatabaseService, Users} from 'src/app/services/Database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  users:Users= {
    memEnrollment: null
  }
  constructor(public afAuth : AngularFireAuth, private router: Router, private dbService : DatabaseService) { 
  }

  ngOnInit() {
  }

  email;
  password;

  createUser(){
    try{
      this.dbService.register(this.email,this.password,this.users)
      //We can redirect to Login page or we can directly go to memE page
      //this.router.navigate(['/member-enrollment',this.afAuth.auth.currentUser.uid]);
      this.router.navigate(['/login'])
    }catch(e){
      console.dir(e)
    }

  }
  
  logout(){
    console.log("logedout")
    this.afAuth.auth.signOut();
  }

}
