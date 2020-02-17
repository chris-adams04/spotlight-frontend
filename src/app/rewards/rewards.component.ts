import { Component, OnInit } from '@angular/core';
import { BookingDeatils } from '../model/BookingDetails';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {

  allBookings: BookingDeatils[] = [];
 
  positionAmount;

  bookingId:number;
  position;
   amount;

  allBookingIds;

  constructor(private regService: RegisterService, private router: Router) {

  }

  ngOnInit() {
    (<HTMLDivElement>document.getElementById("navg")).hidden = true;
    (<HTMLDivElement>document.getElementById("adminNav")).hidden = false;
    this.getAllBookings();
  }

  getAllBookings() {
    this.regService.getAllBookings().subscribe(data => this.allBookings = data);
  }

  announceRewards(){
    this.regService.anounceRewards(this.position,this.positionAmount,this.bookingId).subscribe();
    alert("Rewarded");
    this.router.navigate(['/bookingsadmin']);

  }

  getAmount(position)
{
  this.position=position;
  if(this.position == 1)
  {
    this.positionAmount = 10000;
  }
 else if(this.position == 2)
  {
    this.positionAmount = 7000;
  }
 else if(this.position == 3)
  {
    this.positionAmount = 5000;
  }
}
  getBookingIds(){
    this.regService.getBookingIds().subscribe(data=>this.allBookingIds=data);
  }

  bookId(event){
    this.bookingId=event

  }

}
