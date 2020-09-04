import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  currUserId;
  //try = "home"
  constructor(private activatedRoute: ActivatedRoute,public router: Router) {
  }

  ionViewWillEnter() {
    this.currUserId = this.activatedRoute.snapshot.paramMap.get('id');
    //onsole.log(this.currUserId)
    //need to check if there is any id on the current page
  }

  ngOnInit(){
  }

}
