import { Component, OnInit } from '@angular/core';
import { Registration } from '../model/Registration';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
  constructor(private regService: RegisterService,private router:Router) { }
password
confirmpassword

registration:Registration =new Registration();

  ngOnInit() {
    (<HTMLDivElement>document.getElementById("navg")).hidden=true;
    (<HTMLDivElement>document.getElementById("adminNav")).hidden=true;

  }

  

onSubmit(register)
{
     this.registration.userType= "User"
      this.regService.register(this.registration).subscribe((data:boolean)=>{
        if(data)
        {
          this.router.navigate(['/empty'])
          alert(JSON.stringify("Registration Sucessful"))
          this.router.navigate(['/login'])
         
        }
        else
         alert("Already Registered with this Mobile Number")
         } ,
         error=>console.log(error)
         );
         this.registration= new Registration();
}

}
