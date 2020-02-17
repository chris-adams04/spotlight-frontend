import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle'
import { UserIdleService } from 'angular-user-idle';
import { Payment } from '../model/Payment';
import { BookingDeatils } from '../model/BookingDetails';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-paymentmethod',
  templateUrl: './paymentmethod.component.html',
  styleUrls: ['./paymentmethod.component.css']
})
export class PaymentmethodComponent implements OnInit {


  

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
    this.paymentCalculation();

  }

  paymentMode;



  paymentCalculation(){
    this.payment.baseFee=this.booking.charge;
    if(this.booking.costumeStatus == 'Requested')
      {
        this.payment.costumeCharge=1500;
      }
      else
      {
        this.payment.costumeCharge=0;
      }
    
      this.payment.internetFee=30;
      this.payment.cgst=(2.5*this.payment.baseFee)/100;
      this.payment.sgst=(2.5*this.payment.baseFee)/100;
      this.payment.totalFee=this.payment.baseFee+this.payment.costumeCharge+this.payment.internetFee+this.payment.cgst+this.payment.sgst;
      this.booking.totalFee=this.payment.totalFee;
  }


 }
