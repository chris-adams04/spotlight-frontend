import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';
import { BnNgIdleService } from 'bn-ng-idle';
import { AdminGuard } from '../admin.guard';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router, private authservice : AuthserviceService,private admin:AdminGuard) { }

  ngOnInit() {
    this.authservice.logOut();
    this.router.navigate(['/login']);
  }

}
