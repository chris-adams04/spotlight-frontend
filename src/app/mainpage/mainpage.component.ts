import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (<HTMLDivElement>document.getElementById("navg")).hidden=false;
    (<HTMLDivElement>document.getElementById("adminNav")).hidden=true

  }

}
