import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';
import { BookingDeatils } from '../model/BookingDetails';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-showuserbookings',
  templateUrl: './showuserbookings.component.html',
  styleUrls: ['./showuserbookings.component.css']
})
export class ShowuserbookingsComponent implements OnInit {

  userBookings: BookingDeatils[] = [];

  userId;

  noOfBookings: number = 0;

  config:any;


  displayedColumns: string[] = ['bookingId', 'choreographerId', 'choreographer', 'danceType', 'city','area',
   'place','rank','reward','costumeStatus','bookingStatus','feeStatus','totalFee','action'];
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
    (<HTMLDivElement>document.getElementById("navg")).hidden = false;
    (<HTMLDivElement>document.getElementById("adminNav")).hidden = true;
    this.getUserBookings();
  }

  getUserBookings() {
    this.regService.getUserBookings().subscribe(data =>{
      this.userBookings = data;
      this.dataSource = new MatTableDataSource(this.userBookings);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.userBookings);
    });
  }

  deleteBooking(booking) {

    if (confirm("Are you sure you want to delete")) {
      this.regService.deleteBooking(booking.bookingId,booking.choreographerId).subscribe();
      window.location.reload();
    }

  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  func(customer){
    console.log(customer)
  }

}
