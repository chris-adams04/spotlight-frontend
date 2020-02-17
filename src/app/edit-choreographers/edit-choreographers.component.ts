import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { Choreographer } from '../model/Choreographer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-choreographers',
  templateUrl: './edit-choreographers.component.html',
  styleUrls: ['./edit-choreographers.component.css']
})
export class EditChoreographersComponent implements OnInit {

  selectedChoreographer: Choreographer = new Choreographer();

  editedChoreographer: Choreographer = new Choreographer();

  isEdited;

  userType;

  constructor(private regService: RegisterService, private router: Router) {
    this.selectedChoreographer = this.regService.selectedChoreographer;
    this.regService.getUserType('').subscribe(data => this.userType = data);
  }



  ngOnInit() {

    (<HTMLDivElement>document.getElementById("navg")).hidden = true;

    (<HTMLDivElement>document.getElementById("adminNav")).hidden = false;


  }

  onSubmit(editForm) {
    if (confirm("Confirm to Submit changes") == true) {
      this.regService.editChoreographer(this.selectedChoreographer).subscribe(data => this.isEdited = data);
      this.router.navigate(['/adminhome']);

    }
  }

}
