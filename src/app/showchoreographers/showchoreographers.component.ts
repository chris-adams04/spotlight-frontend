import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { Choreographer } from '../model/Choreographer';
import { Router } from '@angular/router';
import { BookingDeatils } from '../model/BookingDetails';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-showchoreographers',
  templateUrl: './showchoreographers.component.html',
  styleUrls: ['./showchoreographers.component.css']
})
export class ShowchoreographersComponent implements OnInit {

  config: any;

  searchText;
  searchText1;

  available = "Available";
  notAvailable = "Not Available";
  // youBooked="You Booked";

  choreographers: Choreographer[] = [];

  allBookings: BookingDeatils[] = [];

  userBookings: BookingDeatils[] = [];

  selectedChoreographer: Choreographer;

  address;

  userType;

  constructor(private regService: RegisterService, private router: Router) {

    this.config = {
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: this.choreographers.length
    };

    this.regService.getUserType('').subscribe(data => this.userType = data);
  }
  displayedColumns: string[] = ['cId', 'cName', 'age', 'gender', 'danceType', 'city','area', 'place','noOfBookings','charge','status','action'];
  dataSource

  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator; 
  @ViewChild(MatSort,{static: false}) sort : MatSort;

  ngOnInit() {

    (<HTMLDivElement>document.getElementById("navg")).hidden = false;
    (<HTMLDivElement>document.getElementById("adminNav")).hidden = true;

    this.getChoreographerList();
    this.getAllBookings();
    this.getUserBookings();

    this.address = "";
  }


  getChoreographerList() {
    this.regService.getChoreographers().subscribe(data => {
      this.choreographers = data;
      this.dataSource = new MatTableDataSource(this.choreographers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.choreographers);
    });
  }


  getAllBookings() {
    this.regService.getAllBookings().subscribe(data => this.allBookings = data)
  }

  getUserBookings() {
    this.regService.getUserBookings().subscribe(data => this.userBookings = data);
  }

  bookChoreographer(selectedChoreographer) {
    if (selectedChoreographer.place == "Studio") {
      this.regService.setSelectedChoreographer(selectedChoreographer);
      this.router.navigate(['/confirmbooking']);
    }
    else {

      this.address = prompt("Enter Full Address : min 4 characters")
      if (this.address && this.address.length >= 4) {
        selectedChoreographer.area = this.address;
        this.regService.setSelectedChoreographer(selectedChoreographer);
        this.router.navigate(['/confirmbooking']);
      }

    }

  }

  func(customer){
    console.log(customer)
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }



  doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
