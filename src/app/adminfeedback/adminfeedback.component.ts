import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';
import { Feedback } from '../model/Feedback';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-adminfeedback',
  templateUrl: './adminfeedback.component.html',
  styleUrls: ['./adminfeedback.component.css']
})
export class AdminfeedbackComponent implements OnInit {

  allFeedbacks: Feedback[] = [];
  config: any;

  displayedColumns: string[] = ['feedbackId', 'candidateId', 'candidateName', 'feedback'];
  dataSource

  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator; 
  @ViewChild(MatSort,{static: false}) sort : MatSort;

  constructor(private regService: RegisterService, private router: Router) {
    this.config = {
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: this.allFeedbacks.length
    };

  }

  ngOnInit() {
    (<HTMLDivElement>document.getElementById("navg")).hidden = true;
    (<HTMLDivElement>document.getElementById("adminNav")).hidden = false;
    this.getAllFeedbacks();
  }

  getAllFeedbacks() {
    this.regService.getFeedback().subscribe(data =>  {
      this.allFeedbacks = data;
      this.dataSource = new MatTableDataSource(this.allFeedbacks);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.allFeedbacks);
    });
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
}
