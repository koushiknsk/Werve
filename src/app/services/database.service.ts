import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import {AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { Health, HealthData } from '@ionic-native/health/ngx';
import { Platform, AlertController } from '@ionic/angular'

export interface Users{
  //nullok true - should change in future 
  firstEntry?: boolean,
  memEnrollment?: MemberEnrollment,
  personalDetails?: PersonalDetails,
  lifeStyleDetails?: LifestyleDetails,
  foodDetails?: FoodDetails,
  fitnessDetails?: FitnessDetails[]
}

export interface MemberEnrollment {
  insPolicyNumber: '',
  dob:'',
  email: '',
  gender:'',
  mobileNo:''
}

export interface PersonalDetails {
  height: '',
  weight: '',
  waist: '',
  bloodGroup: '',
  systolic: '',
  diastolic: '',
  bloodSugar: ''
}

export interface LifestyleDetails {
  cigarettes: '',
  alcohol: '',
  feeling: ''
}

export interface FoodDetails{
  wholegrains: '',
  dairy: '',
  fruits: '',
  vegetables: '',
  meatAndPoultry: ''
}

export interface FitnessDetails {
    type: string,
    date: Date,
    steps: string,
    calories: string,
    distance: string,
    sleep?: string
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private allUsers: Observable<Users[]>;
  private afsAllUsersCollection: AngularFirestoreCollection<Users>;
  datatypes = [{
    read : ['steps','distance','calories'],       // Read only permission
  }]
  healthData : HealthData[] =[];
  steps;
  distance;
  calories;
  sleep;
  isAuthorized = false;

  constructor(private alertCtrl : AlertController, private plt : Platform,  private health : Health, public afAuth : AngularFireAuth, private afs: AngularFirestore) {
    this.afsAllUsersCollection = this.afs.collection<Users>('Users');
    this.allUsers = this.afsAllUsersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  async gAuth(){
    try{
      await this.health.requestAuthorization(this.datatypes).then(()=>{
        this.health.isAuthorized(this.datatypes).then((auth)=>{
          this.isAuthorized = auth
        })
        this.alert("login successful")
      })

    }catch(e){
      this.alert("auth error - " + e)
    }
  }

  getTSteps(){    
    let steps = 0     
      this.getSpecificQueryData('steps',true)
      .then(hdata =>{
        this.healthData = hdata
        //this.alert(JSON.stringify(this.healthData))
        for(var i of this.healthData)  {
          steps = steps + parseInt(i.value)
        }
        //this.alert("Your total Steps for today -" + steps)
        this.steps = steps      
      })
    return this.steps
  }

  getDistance(){    
    let distance = 0      
      this.getSpecificQueryData('distance',true)
      .then(hdata =>{
        this.healthData = hdata
        //this.alert(JSON.stringify(this.healthData))
        for(var i of this.healthData)  {
          distance = distance + parseInt(i.value)
        }
        //this.alert(" Distance walked today - " + (distance/1000) + " km")
        this.distance = (distance/1000)      
      })
    return this.distance
  }
  
  getCalories(){    
    let calories = 0     
      this.getSpecificQueryData('calories',true)
      .then(hdata =>{
        this.healthData = hdata
        //this.alert(JSON.stringify(this.healthData))
        for(var i of this.healthData)  {
          calories = calories + parseInt(i.value)
        }
        //this.alert("Calories burnt today - " + calories)
        this.calories = calories      
      })
    return this.calories
  }

  getSleep(){    
    let sleep = 0     
      this.getSpecificQueryData('sleep',true)
      .then(hdata =>{
        this.healthData = hdata
        //this.alert(JSON.stringify(this.healthData))
        for(var i of this.healthData)  {
          sleep = sleep + parseInt(i.value)
        }
        //this.alert("Calories burnt today - " + calories)
        this.sleep = sleep      
      })
    return this.sleep
  }
  async alert(message : any){
    const alert = await this.alertCtrl.create({
      header : 'Alert',
      message: message,
      buttons: ['OK']
    });

    await alert.present()
  }

  async getSpecificQueryData(dType : string, filtered : boolean){
    try{
      return await this.health.queryAggregated({
        startDate: new Date(), // new Date().getTime() - 1 * 24 * 60 * 60 * 1000  one day ago
        endDate: new Date(), // now
        dataType: dType,
        bucket: 'day',
        filtered: filtered
      })
    }catch(e){        
      this.alert("Error")
      this.alert(JSON.stringify(e))
    }
  }


  async register(email: string, password: string, user: Users){
    const reg  = await this.afAuth.auth.createUserWithEmailAndPassword(email,password)
    .then((newUserCredential: firebase.auth.UserCredential) => {      
      this.afsAllUsersCollection.doc(`${newUserCredential.user.uid}`)
      .set(user);
    })
    .catch(error => {
      this.alert("error")
      throw new Error(error);
    });
  }

  getCmpObjs(): Observable<Users[]> {
    return this.allUsers;
  }

  getCurrentUserData(id: string): Observable<Users> {
    return this.afsAllUsersCollection.doc<Users>(id).valueChanges().pipe(
      take(1),
      map(user => {
        return user
      })
    );
  }

  addMemEnrollData(uid: string, memE: MemberEnrollment): Promise<void> {
    try{
      return this.afsAllUsersCollection.doc(uid).update({ memEnrollment: memE});
    }catch(e){
      console.log(e)
    }
  }

  addpersonalData(uid: string, pDetails: PersonalDetails): Promise<void> {
    try{
      return this.afsAllUsersCollection.doc(uid).update({ personalDetails: pDetails});
    }catch(e){
      console.log(e)
    }
  }

  addLifestyleData(uid: string, lDetails: LifestyleDetails): Promise<void> {
    try{
      return this.afsAllUsersCollection.doc(uid).update({ lifeStyleDetails: lDetails});
    }catch(e){
      console.log(e)
    }
  }

  addFoodData(uid: string, fDetails: FoodDetails): Promise<void> {
    try{
      return this.afsAllUsersCollection.doc(uid).update({ foodDetails: fDetails});
    }catch(e){
      console.log(e)
    }
  }

  addFitnessDetails(uid: string, ftDetails: FitnessDetails){
    try{
      //this.alert("added")
      return this.afsAllUsersCollection.doc(uid).update({ fitnessDetails: firebase.firestore.FieldValue.arrayUnion(ftDetails)});
    }catch(e){
      console.log(e)
    }
  }

  printData(msg : string){
    this.alert(msg)
  }

  getUser(id: string): Observable<Users> {
    return this.afsAllUsersCollection.doc<Users>(id).valueChanges().pipe(
      take(1),
      map(user => {        
        return user
      })
    );
  }
 
  // addCompObj(co : Users): Promise<DocumentReference> {    
  //   return this.cmpObjCollection.add(co);
  // }

  // getIdeas(): Observable<Idea[]> {
  //   return this.ideas;
  // }
 
  // addIdea(idea: Idea): Promise<DocumentReference> {
  //   return this.ideaCollection.add(idea);
  // }
 
  // updateIdea(idea: Idea): Promise<void> {
  //   return this.ideaCollection.doc(idea.id).update({ name: idea.name, notes: idea.notes });
  // }
 
  // deleteIdea(id: string): Promise<void> {
  //   return this.ideaCollection.doc(id).delete();
  // }
}
