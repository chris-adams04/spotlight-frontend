import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';
import { Choreographer } from '../model/Choreographer';
import { BookingDeatils } from '../model/BookingDetails';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  userType;

  choreographers: Choreographer[] = [];

  allBookings: BookingDeatils[] = [];

  available = 'Available';
  notAvailable = 'Not Available';

  address;

  searchText;

  config: any;
  displayedColumns: string[] = ['cId', 'cName', 'age', 'gender', 'danceType', 'city','area', 'place','noOfBookings','charge','edit','delete'];
  dataSource

  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator; 
  @ViewChild(MatSort,{static: false}) sort : MatSort;

  constructor(private regService: RegisterService, private router: Router) {

    this.config = {
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: this.choreographers.length
    };


    this.regService.getUserType('').subscribe(data => this.userType = data);

  }

  ngOnInit() {

    (<HTMLDivElement>document.getElementById("navg")).hidden = true;
    (<HTMLDivElement>document.getElementById("adminNav")).hidden = false;

    this.getChoreographerList();
  }



  getChoreographerList() {
    this.regService.getChoreographers().subscribe(data =>  {
      this.choreographers = data;
      this.dataSource = new MatTableDataSource(this.choreographers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.choreographers);
    });
  }


  editChoreographer(selectedChoreographer) {
    this.regService.setSelectedChoreographer(selectedChoreographer);
    this.router.navigate(['/editchoreographers']);

  }

  deleteChoreographer(ch) {
    if (confirm("Are you sure you want to delete")) {
      this.regService.deleteChoreographer(ch.cId).subscribe();
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
