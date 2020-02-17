import { Component, OnInit, ɵɵqueryRefresh, ViewChild } from '@angular/core';
import { BookingDeatils } from '../model/BookingDetails';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-bookingsadmin',
  templateUrl: './bookingsadmin.component.html',
  styleUrls: ['./bookingsadmin.component.css']
})
export class BookingsadminComponent implements OnInit {

  userBookings: BookingDeatils[] = [];

  searchText;

  config:any;

  displayedColumns: string[] = ['bookingId', 'candidate','candidateId','choreographerId', 'choreographer', 'danceType', 'city','area',
   'place','rank','reward','totalFee','feeStatus','costumeStatus','bookingStatus','action'];
  dataSource

  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator; 
  @ViewChild(MatSort,{static: false}) sort : MatSort;


  constructor(private regService: RegisterService, private router: Router) {
    this.config = {
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: this.userBookings.length
    };
  }

  ngOnInit() {
    (<HTMLDivElement>document.getElementById("navg")).hidden = true;
    (<HTMLDivElement>document.getElementById("adminNav")).hidden = false;
    this.getUserBookings();
  }

  getUserBookings() {
    this.regService.getAllBookings().subscribe(data => {
      this.userBookings = data;
      this.dataSource = new MatTableDataSource(this.userBookings);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.userBookings);
    });
  }

  paymentStatus(bookingId){
    if (confirm("Confirm to Pay")) {
    let feeStatus='Paid';
    this.regService.paymentStatus(feeStatus,bookingId).subscribe();
    window.location.reload();
    }

  }

  issueCostume(bookingId){
    if (confirm("Are you sure to Issue Costume")) {
    let costumeStatus='Issued';
    this.regService.updateCostumeStatus(costumeStatus,bookingId).subscribe();
    window.location.reload();
    }
  }

  declineCostume(bookingId){
    if (confirm("Are you sure to Decine costume Request")) {
    let costumeStatus='Declined';
    this.regService.updateCostumeStatus(costumeStatus,bookingId).subscribe();
    window.location.reload();
    }
  }

  confirmBooking(bookingId){
    if (confirm("Are you sure to Confirm Booking")) {
    let bookingStatus='Confirmed';
    this.regService.updateBookingStatus(bookingStatus,bookingId).subscribe();
    window.location.reload();
    }
  }

  declineBooking(bookingId){
    if (confirm("Are you sure to Decline Booking")) {
    let bookingStatus='Declined';
    this.regService.updateBookingStatus(bookingStatus,bookingId).subscribe();
    window.location.reload();
    }
  }

  deleteBooking(booking) {

    if (confirm("Are you sure you want to delete")) {
     this.regService.deleteBooking(booking.bookingId, booking.choreographerId).subscribe();
      this.getUserBookings();
      window.location.reload();
    }
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
