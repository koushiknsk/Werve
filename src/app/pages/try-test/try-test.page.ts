import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService} from 'src/app/services/Database.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Health, HealthData } from '@ionic-native/health/ngx';
import { Platform, AlertController} from '@ionic/angular';
import { map, catchError } from 'rxjs/operators';
import { pipe, from } from 'rxjs';
import { post } from 'selenium-webdriver/http';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { Chart } from 'chart.js';


const data={
  code : '',
  //current cid is apps cid
  //android id
  //clientid : '622025628960-n1ma0g8oinkeko04m12eco00be6i09ds.apps.googleusercontent.com',
  //web id 
  clientid: '622025628960-n82k067kuid27s9mjs5rj890muvilkte.apps.googleusercontent.com',
  clientSecret : 'QihKjrMLoMBAlO4ZBAuQZqr_',
  redirectURI : 'http://localhost:8100/try-test',
  grantType : 'authorization_code'
}

@Component({
  selector: 'app-try-test',
  templateUrl: './try-test.page.html',
  styleUrls: ['./try-test.page.scss'],
})

export class TryTestPage implements OnInit {
  @ViewChild('barChartLine') barChartLine;
  @ViewChild('barChartBar') barChartBar;
  @ViewChild('barChartBarOne') barChartBarOne;

  // idToken;
  // accessToken
  // datatypes = [{
  //   read : ['steps'],       // Read only permission
  // }]
  // healthData : HealthData[] =[];
  // steps;
  // isAuthorized;

  constructor(private plt : Platform,  private health : Health, private gplus: GooglePlus, private http: HttpClient, private httpNative: HTTP,private alertCtrl : AlertController) {
    // this.plt.ready().then(() =>{
    //   if(!this.health.isAuthorized(this.datatypes)){
    //     this.health.requestAuthorization(this.datatypes)
    //   }
    // })    
  }

  ngOnInit() {}

  bars: any;
  colorArray: any;
  chartData = {
    labels: ['H1-2018','H2-2018','H1-2019','H2-2019'],
    datasets: [{
      barThickness: 20,
      label: 'Number of Claims',
      data: [558, 476, 342, 330],
      backgroundColor: 'rgb(0, 0, 0, 0)', // array should have same number of elements as number of dataset
      borderColor: 'rgb(100,149,237)',// array should have same number of elements as number of dataset
      borderWidth: 2,
      yAxisID: 'left-y-axis'
    },
    {
      type : 'line',
      lineTension: 0,
      label: 'Total Claim Amount',
      data: [3233333, 2790167, 1853333, 1668333],
      backgroundColor: 'rgb(0, 0, 0, 0)', // array should have same number of elements as number of dataset
      borderColor: 'rgb(255, 128, 0)',// array should have same number of elements as number of dataset
      borderWidth: 2,
      yAxisID: 'right-y-axis',
      pointRadius: 0,
    },
    {
      type : 'line',
      lineTension: 0,
      label: 'Linear (Avg. No. of Claims)',
      borderDash: [5,5],
      data: [3233333, 2759167, 2213750, 1668333],
      backgroundColor: 'rgb(0, 0, 0, 0)', // array should have same number of elements as number of dataset
      borderColor: 'rgb(255, 102, 255)',// array should have same number of elements as number of dataset
      borderWidth: 2,
      yAxisID: 'right-y-axis',
      pointRadius: 0
    }]
  }
  chartOptions = {
    scales: {
      xAxes:[{
        gridLines: {
          display: false
       }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
        gridLines: {
          display: false
       },
        id: 'left-y-axis',
        type: 'linear',
        position: 'left'
    }, {
      ticks: {
        beginAtZero: true
      },
        id: 'right-y-axis',
        type: 'linear',
        position: 'right'
    }]
    }
  }

  barChartData = {    
    labels: ['Part of Wellness Program','Not Part of Wellness Program'],
    datasets: [{
      label: 'Avg. no. of claims',
      data: [476,558],
      backgroundColor: 'rgb(255, 128, 0)', // array should have same number of elements as number of dataset
      borderColor: 'rgb(255, 128, 0)',// array should have same number of elements as number of dataset
      borderWidth: 1
    },
    {
      label: 'No. of members',
      data: [2767, 2350],
      backgroundColor: 'rgb(100,149,237)', // array should have same number of elements as number of dataset
      borderColor: 'rgb(100,149,237)',// array should have same number of elements as number of dataset
      borderWidth: 1
    }]
  }

  barChartDataOne = {    
    labels: ['Part of Wellness Program','Not Part of Wellness Program'],
    datasets: [{
      label: 'Avg. no. of claims',
      data: [2759,3233],
      backgroundColor: 'rgb(255, 128, 0)', // array should have same number of elements as number of dataset
      borderColor: 'rgb(255, 128, 0)',// array should have same number of elements as number of dataset
      borderWidth: 1
    },
    {
      label: 'No. of members',
      data: [2767, 2350],
      backgroundColor: 'rgb(100,149,237)', // array should have same number of elements as number of dataset
      borderColor: 'rgb(100,149,237)',// array should have same number of elements as number of dataset
      borderWidth: 1
    }]
  }

  barChartOptions = {
    scales: {
      xAxes:[{
        ticks: {
          beginAtZero: true
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
        gridLines: {
          display: false
       }
    }]
    }
  }

  
  ionViewDidEnter() {
    this.createBarChartLine();
    this.createBarChartBar();
    this.createBarChartBarOne();
  }

  createBarChartLine() {
    this.bars = new Chart(this.barChartLine.nativeElement, {      
      type: 'bar',
      data: this.chartData,
      options: this.chartOptions
    });
  }

  createBarChartBar() {
    this.bars = new Chart(this.barChartBar.nativeElement, {      
      type: 'horizontalBar',
      data: this.barChartData,
      options: this.barChartOptions
    });
  }

  createBarChartBarOne() {
    this.bars = new Chart(this.barChartBarOne.nativeElement, {      
      type: 'horizontalBar',
      data: this.barChartDataOne,
      options: this.barChartOptions
    });
  }
}

  // async aurthorization(){
  //   try{
  //     await this.health.requestAuthorization(this.datatypes).then(()=>{
  //       this.isAuthorized = this.health.isAuthorized
  //     })

  //   }catch(e){
  //     this.alert(e)
  //   }
  // }

  // async getTodaySteps(){    
  //   let steps = 0
  //   if(this.isAuthorized){      
  //     this.getSpecificQueryData('steps',false)
  //     .then(hdata =>{
  //       this.alert(JSON.parse(JSON.stringify(hdata)))
  //       for(var i of hdata)  {
  //         steps = steps + parseInt(i.value)
  //       } 
  //     })
  //     this.alert(steps)
  //     this.steps = steps
  //   }else{
  //     this.aurthorization()
  //   }
  // }

  // async getTSteps(){    
  //   let steps = 0 
  //   if(this.isAuthorized){      
  //     this.getSpecificQueryData('steps',true)
  //     .then(hdata =>{
  //       this.healthData = hdata
  //       this.alert(JSON.stringify(this.healthData))
  //       for(var i of this.healthData)  {
  //         steps = steps + parseInt(i.value)
  //       }
  //       this.alert(steps)
  //       this.steps = steps      
  //     })
  //   }else{
  //     this.aurthorization()
  //   }
  // }
  

  // async getSpecificQueryData(dType : string, filtered : boolean){
  //   try{
  //     return await this.health.query({
  //       startDate: new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000), // one days ago
  //       endDate: new Date(), // now
  //       dataType: dType,
  //       limit: 1000,
  //       filtered: filtered
  //     })
  //   }catch(e){        
  //     this.alert("Error")
  //     this.alert(JSON.stringify(e))
  //   }
  // }
  // async nativeLogin(){
  //   try{
  //     await this.gplus.login({
  //       'webClientId': data.clientid,
  //       'offline': true,
  //       'scopes': 'https://www.googleapis.com/auth/fitness.activity.read'
  //     }).then((success)=> {
  //       this.alert("Success logedIn")
  //       this.alert(JSON.stringify(success))
  //       this.alert(success.accessToken)
  //       this.alert(success.idToken)
  //       this.idToken = success.idToken
  //       data.code = this.idToken
  //       this.accessToken = success.accessToken
  //     })  
  //   }catch(e){
  //     this.alert("Error")
  //     this.alert(e)
  //   }    
  // }

  // async nativeGet(){
  //   try{
  //     await this.httpNative.get('https://accounts.google.com/o/oauth2/v2/auth?client_id='+data.clientid+
  //     '&redirect_uri='+data.redirectURI +
  //     '&scope=' + 'https://www.googleapis.com/auth/fitness.activity.read' +
  //     '&response_type=code',{},{})
  //     //await this.httpNative.get('https://www.googleapis.com/fitness/v1/users/me/dataSources?access_token='+this.accessToken,{},{})
  //     .then((success)=> {
  //       this.alert("success")
  //       this.alert(success.data)
  //       this.alert(success.data.steps)
  //     })  
  //   }catch(e){
  //     this.alert("Error")
  //     this.alert(JSON.stringify(e))
  //   }       
  // }

  // async nativePost(){
  //   try{
  //     await this.httpNative.post('https://oauth2.googleapis.com/token',data,
  //     {
  //       // headers: new HttpHeaders({
  //       //   'Content-Type':'application/x-www-form-unlencoded'
  //       // })
  //     })      
  //     .then((response)=> {
  //       this.alert("success")
  //       this.alert(response.data)
  //       this.alert(JSON.stringify(response))
  //     })
  //   }catch(e){
  //     this.alert("Error")
  //     this.alert(JSON.stringify(e))
  //   }    

  // }

  // async nativeInAppBrowserGet(){

  // }

  // async myGet(){
  //   var ref = window.
  //   open('https://accounts.google.com/o/oauth2/v2/auth?client_id='+data.clientid+
  //   '&redirect_uri='+data.redirectURI+
  //   '&scope=' + 'https://www.googleapis.com/auth/fitness.activity.read'+
  //   '&response_type=code')

  //   ref.addEventListener('loadstart',function(event){
  //     if(event != null){
  //       this.alert(event.returnValue)
  //       console.log(event)
  //     }
  //   })

  // }

  // myPost(){
  //     this.http.post('https://oauth2.googleapis.com/token',data,
  //   {
  //     headers: new HttpHeaders({
  //       'Content-Type':'application/x-www-form-unlencoded'
  //     })
  //   })//.pipe(catchError(e => console.log(e)))
  //   .subscribe((response)=> console.log(response))
  //   ,err=>{
  //     console.log(err)
  //   };
  // }


  // async alert(message : any){
  //   const alert = await this.alertCtrl.create({
  //     header : 'Alert',
  //     message: message,
  //     buttons: ['OK']
  //   });

  //   await alert.present()
  // }

  // getUserData(){
  //   // this.health.query({
  //   //   startDate: new Date(new Date().getTime() - 10*24*60*60*1000 ), 
  //   //   // ten days ago
  //   //   endDate: new Date(), // now
  //   //   dataType: 'steps',
  //   //   limit: 1000
  //   //   }).then(data=>{
  //   //   console.log(data);
  //   //   this.allDatas = data
  //   //   }).catch(e => {
  //   //     this.errorInData = e
  //   //   })
  // }

  
  //   this.checkPlatformReady();
  //   }
  //   async checkPlatformReady() {
  //   const ready = !!await this.platform.ready();
  //   if (ready) {
  //   // Use plugin functions here
  //   this.health.isAvailable()
  //   .then((available:boolean) => {
  //     console.log(available);
  //     this.health.requestAuthorization([
  //       'distance', 'nutrition',  //read and write permissions
  //       {
  //         read: ['steps'],       //read only permission
  //         write: ['height', 'weight']  //write only permission
  //       }
  //     ])
  //     .then(res => console.log(res))
  //     .catch(e => console.log(e));
  //   })
  //   .catch(e => 
  //     this.errorInInit = e
  //   );
  //   }
  
  // {
  //   'scopes': '... ', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
  //   'webClientId': 'client id of the web app/server side', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
  //   'offline': true // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
  // }
  // userData :Array<HealthData>= {
  //   startDate: null,
  //   endDate: null,
  //   value: '',
  //   unit: '',
  //   sourceName: '',
  //   sourceBundleId: ''
  // }
  //allDatas : Array<any>
 
  
  // this.http.get('https://www.googleapis.com/fitness/v1/users/me/dataSources')
  // .pipe(map(e => console.log(e)))
  // errorInInit;
  // errorInData;
  
  
  
    // this.http
    // .get('https://accounts.google.com/o/oauth2/v2/auth?client_id=622025628960-n82k067kuid27s9mjs5rj890muvilkte.apps.googleusercontent.com&redirect_uri=http://localhost:8100/try-test&scope=https://www.googleapis.com/auth/drive.metadata.readonly&response_type=code')
    // .subscribe((response)=>{
    //   message = (response)  
    // }),err=>{
    //   message = 'error' + JSON.parse(err)
    //   console.log(err)
    // };

    // let nativeCall = this.httpNative
    // .get('https://accounts.google.com/o/oauth2/v2/auth?client_id=622025628960-k5rrt8q1kfdc73r37agaj91b2kpt2lss.apps.googleusercontent.com&redirect_uri=http://localhost:8100/try-test&scope=https://www.googleapis.com/auth/drive.metadata.readonly&response_type=code',
    // {},{
    //   'Content-Type': 'application/json'
    // })

    // from(nativeCall)
    // .subscribe((response)=>{
    //   message = JSON.parse(response.data)  
    // }),err=>{
    //   message = 'error' + JSON.parse(err)
    //   console.log(err)
    // };