import { Component } from '@angular/core';
import { BookingDeatils } from './model/BookingDetails';
import { RegisterService } from './service/register.service';
import { Router } from '@angular/router';
import { AuthserviceService } from './service/authservice.service';
import {  ElementRef, AfterViewInit, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements AfterViewInit{
  title = 'DanceStudio';

  userName;

  @Input() url = location.href;
  @Input() urltweet = location.href;
  @Input() text = '';

  constructor(private regService: RegisterService, private router: Router,private authService:AuthserviceService) {

     // initialise facebook sdk after it loads if required
     if (!window['fbAsyncInit']) {
      window['fbAsyncInit'] = function () {
          window['FB'].init({
              appId: 'your-app-id',
              autoLogAppEvents: true,
              xfbml: true,
              version: 'v3.0'
          });
      };
  }

  // load facebook sdk if required
  const url = 'https://connect.facebook.net/en_US/sdk.js';
  if (!document.querySelector(`script[src='${url}']`)) {
      let script = document.createElement('script');
      script.src = url;
      document.body.appendChild(script);
  }


  const urltweet = 'https://platform.twitter.com/widgets.js';
  if (!document.querySelector(`script[src='${urltweet}']`)) {
      let script = document.createElement('script');
      script.src = url;
      document.body.appendChild(script);
  }
  }

ngAfterViewInit(): void {
    // render facebook button
    window['FB'] && window['FB'].XFBML.parse();

    window['twttr'] && window['twttr'].widgets.load();
}


  ngOnInit() {
    this.userName = sessionStorage.getItem('nameOfUser');
    }

    logout(){
      this.authService.logOut();

    }



  }
