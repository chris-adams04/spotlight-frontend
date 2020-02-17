import { Component, OnInit } from '@angular/core';
import { Choreographer } from '../model/Choreographer';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addchoreographers',
  templateUrl: './addchoreographers.component.html',
  styleUrls: ['./addchoreographers.component.css']
})
export class AddchoreographersComponent implements OnInit {

  choreographer: Choreographer = new Choreographer();
  userType;

  constructor(private regService: RegisterService,private router:Router) {
    this.regService.getUserType('').subscribe(data=>this.userType=data);

   }

  ngOnInit() {
    (<HTMLDivElement>document.getElementById("navg")).hidden = true;
    (<HTMLDivElement>document.getElementById("adminNav")).hidden = false;
  }

  onSubmit(choreographerForm) {
    this.regService.addChoreographer(this.choreographer).subscribe();
    alert("Added Successfully")
    this.router.navigate(['/adminhome']);
  }

}
