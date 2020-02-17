import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";
import { AuthserviceService } from '../service/authservice.service';
import { RegisterService } from '../service/register.service';
//import {AuthenticationService} from "../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {




  username = ''
  password = ''
  un
  pw
  loginType;

  userType;
  userType1;

  uName;
  pwd;

  nameOfUser;

  constructor(private regService: RegisterService, private router: Router, private authservice: AuthserviceService) {
  }


  ngOnInit() {
    (<HTMLDivElement>document.getElementById("navg")).hidden = true;
    (<HTMLDivElement>document.getElementById("adminNav")).hidden = true;
  }

  check(register) {

    this.uName = (<HTMLInputElement>document.getElementById('username')).value;
    this.pwd = (<HTMLInputElement>document.getElementById('password')).value;
    this.regService.login(this.uName, this.pwd).subscribe((data: boolean) => {
      if (data) {
        sessionStorage.setItem('username', this.uName)
        this.regService.getName().subscribe(data => this.nameOfUser = data);

        this.regService.getUserType(this.uName).subscribe((data) => {
          if (data == 'Admin') {
            sessionStorage.setItem('nameOfUser', this.nameOfUser);
            sessionStorage.setItem('adminId', this.uName)
            sessionStorage.setItem("userType", 'Admin')
            this.regService.getSessionName();
            this.router.navigate(['/adminhome']);
          }
          else if (data == 'User') {
            sessionStorage.setItem('nameOfUser', this.nameOfUser);
            sessionStorage.setItem('UserId', this.uName)
            sessionStorage.setItem("userType", 'User')
            this.regService.getSessionName();
            this.router.navigate(['/mainpage'])
          }
        });

      }
      else
        alert("Invalid Credentials")
    },
      error => console.log(error)
    );

  }


}