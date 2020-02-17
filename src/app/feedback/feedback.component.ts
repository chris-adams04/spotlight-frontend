import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';
import { Feedback } from '../model/Feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {


  feedback:Feedback;

  allFeedbacks:Feedback[]=[];
  userId;
  userName;

  feedbackId;

  config:any;
  constructor(private regService:RegisterService,private router:Router) {
    this.config = {
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: this.allFeedbacks.length
    };
    this.feedback=new Feedback();
   }

  ngOnInit() {
    (<HTMLDivElement>document.getElementById("navg")).hidden = false;
    (<HTMLDivElement>document.getElementById("adminNav")).hidden = true;
    this.getUserDetails();
    this.getAllFeedbacks();
  }
 
  getUserDetails(){
    this.userId=this.regService.getUserId();
    this.regService.getName().subscribe(data=>this.userName=data)

  }

  getAllFeedbacks(){
    this.regService.getFeedback().subscribe(data=>this.allFeedbacks=data)

  }

  addFeedback(){
    this.feedback.candidateId= this.userId;
    this.feedback.candidateName=this.userName[0];

    this.regService.addFeedback(this.feedback).subscribe(data=>this.feedbackId=data)
    alert("Thanks for your valuable Feedback")
    window.location.reload();

  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}
