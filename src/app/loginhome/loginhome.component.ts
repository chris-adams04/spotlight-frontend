import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginhome',
  templateUrl: './loginhome.component.html',
  styleUrls: ['./loginhome.component.css']
})
export class LoginhomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (<HTMLDivElement>document.getElementById("navg")).hidden=true;
    (<HTMLDivElement>document.getElementById("adminNav")).hidden=true;
  }

}
