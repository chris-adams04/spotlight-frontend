import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle'
import { UserIdleService } from 'angular-user-idle';
import { Payment } from '../model/Payment';
import { BookingDeatils } from '../model/BookingDetails';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  

  payment: Payment


  booking: BookingDeatils;

  baseFee;
  costumeCharge;
  internetFee;
  cgst;
  sgst;
  totalFee;

  finalFee;
  feeStatus;

  bookingId

  constructor(private regService:RegisterService, private router: Router) {
    this.payment = new Payment();

  }

  ngOnInit() {
    (<HTMLDivElement>document.getElementById("navg")).hidden = false;
    (<HTMLDivElement>document.getElementById("adminNav")).hidden = true;
    this.booking=this.regService.getBooking();
   

  }

  paymentMode;

  cardPayment() {
    (<HTMLDivElement>document.getElementById("cash")).hidden = true;
    (<HTMLDivElement>document.getElementById("card")).hidden = false;
    this.booking.feeStatus='Paid';

  }

  cashPayment() {

    (<HTMLDivElement>document.getElementById("cash")).hidden = false;
    (<HTMLDivElement>document.getElementById("card")).hidden = true;
    this.booking.feeStatus='Not Paid';

  }
  paymentfn(credit) {
        
    this.regService.book(this.booking).subscribe(data=>this.bookingId=data);

    alert("Booking Successful")
    this.router.navigate(['/showuserbookings'])
  }



}
