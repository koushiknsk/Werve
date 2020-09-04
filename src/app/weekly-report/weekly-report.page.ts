import { Component, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js'
//import CanvasJS from 'canvasjs';
import * as CanvasJS from 'canvasjs';
import { Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';


@Component({
  selector: 'app-weekly-report',
  templateUrl: './weekly-report.page.html',
  styleUrls: ['./weekly-report.page.scss'],
})
export class WeeklyReportPage implements OnInit {
  
  @ViewChild('barChart') barChart;
  bars: any;
  currUserId
  constructor(private platform : Platform,private activatedRoute: ActivatedRoute,public router: Router,
    private location: PlatformLocation) {
    
  }

  ngOnInit() {
   // Bar chart:
   this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
      labels: ["07th-13th July", "14th-19th July", "21st-27th July"],
      datasets: [{
          label: 'Sleep Activity',
          data: [2000 ,8000 , 4000,10000],
          backgroundColor: [
              'rgba(54, 162, 235)',
              'rgba(54, 162, 235)',
              'rgba(54, 162, 235)'
              
          ],
          borderColor: [
              'rgba(54, 162, 235,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 0.5
      }]
      }, 
      options: {
      title:{
          text:"Bar Chart",
          display:false
      },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      },
      legend:{
        labels:{
          fontSize: 8
        }
      }
      }
    });

  }

  ionViewWillEnter() {
    this.currUserId = this.activatedRoute.snapshot.paramMap.get('id');
    this.backButtonEvent()
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      this.location.back()    
    });
  }

}
