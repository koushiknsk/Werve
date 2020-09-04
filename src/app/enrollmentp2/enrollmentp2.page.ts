import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enrollmentp2',
  templateUrl: './enrollmentp2.page.html',
  styleUrls: ['./enrollmentp2.page.scss'],
})
export class Enrollmentp2Page implements OnInit {
  isOneVisible : Boolean = false
  isTwoVisible : Boolean = false


  constructor() { 
    this.onEnter()
  }


  ngOnInit() {}
  onEnter(){
    this.isOneVisible=true;
    this.isTwoVisible = false;
  }

  enrollmentOne(){
    this.isOneVisible = false;
    this.isTwoVisible = true;
  }  
  
  oneBack(){
    this.isOneVisible = true;
    this.isTwoVisible = false;
  }

}
