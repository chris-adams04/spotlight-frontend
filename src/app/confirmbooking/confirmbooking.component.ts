import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';
import { Choreographer } from '../model/Choreographer';
import { BookingDeatils } from '../model/BookingDetails';

@Component({
  selector: 'app-confirmbooking',
  templateUrl: './confirmbooking.component.html',
  styleUrls: ['./confirmbooking.component.css']
})
export class ConfirmbookingComponent implements OnInit {

  selectedChoreograper:Choreographer;
  booking:BookingDeatils= new BookingDeatils();
 
  userId;

  bookingId;
  userName: any;

  costume;

  constructor(private regService:RegisterService, private router:Router) {
   }

  ngOnInit() {
    (<HTMLDivElement>document.getElementById("navg")).hidden=false;
    (<HTMLDivElement>document.getElementById("adminNav")).hidden=true;

    this.uName();
    this.getUserId();
    this.getSelectedChoreographer();
  }

  getSelectedChoreographer(){
    this.selectedChoreograper= this.regService.getSetSelectedChoreographer();
  }

  getUserId(){
    this.userId=  this.regService.getUserId();
  }

  uName(){
    this.regService.getName().subscribe(data=>this.userName=data)
  }

  onSubmit(c){
    this.booking.candidateId=this.userId;
    this.booking.candidate=this.userName[0];
    this.booking.choreographerId=this.selectedChoreograper.cId;
    this.booking.choreographer=this.selectedChoreograper.cName;
    this.booking.danceType=this.selectedChoreograper.danceType;
    this.booking.city=this.selectedChoreograper.city;
    this.booking.area=this.selectedChoreograper.area;
    this.booking.place=this.selectedChoreograper.place;
    this.booking.charge=this.selectedChoreograper.charge;
    this.booking.bookingStatus='Pending';
    this.booking.reward='None';
    this.booking.rank='None';

    this.regService.SetBooking(this.booking);
    this.router.navigate(['/paymentmethod']);
  }

}
