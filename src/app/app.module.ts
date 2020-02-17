import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { ShowchoreographersComponent } from './showchoreographers/showchoreographers.component';
import { ConfirmbookingComponent } from './confirmbooking/confirmbooking.component';
import { ShowuserbookingsComponent } from './showuserbookings/showuserbookings.component';

import { MainpageComponent } from './mainpage/mainpage.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { LogoutComponent } from './logout/logout.component';
import { PaymentmethodComponent } from './paymentmethod/paymentmethod.component';
import { EditChoreographersComponent } from './edit-choreographers/edit-choreographers.component';
import { AddchoreographersComponent } from './addchoreographers/addchoreographers.component';
import { BookingsadminComponent } from './bookingsadmin/bookingsadmin.component';
import { RewardsComponent } from './rewards/rewards.component';
import { LoginhomeComponent } from './loginhome/loginhome.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AdminfeedbackComponent } from './adminfeedback/adminfeedback.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Choreographer } from './model/Choreographer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { MatButtonModule , MatFormFieldModule,} from '@angular/material';
import { FacebookComponent } from './facebook/facebook.component';
import { TwitterComponent } from './twitter/twitter.component';
import {MatInputModule} from '@angular/material';
import { Payment } from './model/Payment';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ShowchoreographersComponent,
    ConfirmbookingComponent,
    ShowuserbookingsComponent,
   
    MainpageComponent,
    AdminhomeComponent,
    LogoutComponent,
    PaymentComponent,
    PaymentmethodComponent,
    EditChoreographersComponent,
    AddchoreographersComponent,
    BookingsadminComponent,
    RewardsComponent,
    LoginhomeComponent,
    FeedbackComponent,
    AdminfeedbackComponent,
    FacebookComponent,
    TwitterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
    
  ],
  providers: [Choreographer],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
