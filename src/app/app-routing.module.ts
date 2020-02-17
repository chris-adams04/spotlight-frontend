import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShowchoreographersComponent } from './showchoreographers/showchoreographers.component';
import { ConfirmbookingComponent } from './confirmbooking/confirmbooking.component';
import { ShowuserbookingsComponent } from './showuserbookings/showuserbookings.component';

import { MainpageComponent } from './mainpage/mainpage.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { LogoutComponent } from './logout/logout.component';
import { PaymentmethodComponent } from './paymentmethod/paymentmethod.component';
import { PaymentComponent } from './payment/payment.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { EditChoreographersComponent } from './edit-choreographers/edit-choreographers.component';
import { AddchoreographersComponent } from './addchoreographers/addchoreographers.component';
import { AdminGuard } from './admin.guard';
import { BookingsadminComponent } from './bookingsadmin/bookingsadmin.component';
import { RewardsComponent } from './rewards/rewards.component';
import { LoginhomeComponent } from './loginhome/loginhome.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AdminfeedbackComponent } from './adminfeedback/adminfeedback.component';
import { FacebookComponent } from './facebook/facebook.component';
import { TwitterComponent } from './twitter/twitter.component';

const routes: Routes = [
  {path : '',redirectTo: '/loginhome', pathMatch:'full'},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loginhome', component: LoginhomeComponent}, 
  { path: 'showchoreographers', component: ShowchoreographersComponent,canActivate:[AuthGaurdService] },
  { path: 'confirmbooking', component: ConfirmbookingComponent,canActivate:[AuthGaurdService] },
  { path: 'showuserbookings', component: ShowuserbookingsComponent,canActivate:[AuthGaurdService] },
  { path: 'feedback', component: FeedbackComponent ,canActivate:[AuthGaurdService]},
  { path: 'mainpage', component: MainpageComponent ,canActivate:[AuthGaurdService]},
  { path: 'adminhome', component: AdminhomeComponent ,canActivate:[AdminGuard]},
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  { path: 'paymentmethod', component: PaymentmethodComponent,canActivate:[AuthGaurdService] },
  { path: 'payment', component: PaymentComponent,canActivate:[AuthGaurdService] }, 
  { path: 'editchoreographers', component: EditChoreographersComponent,canActivate:[AdminGuard] }, 
  { path: 'addchoreographers', component: AddchoreographersComponent,canActivate:[AdminGuard] }, 
  { path: 'bookingsadmin', component: BookingsadminComponent,canActivate:[AdminGuard] }, 
  { path: 'rewards', component: RewardsComponent,canActivate:[AdminGuard] }, 
  { path: 'adminfeedback', component: AdminfeedbackComponent ,canActivate:[AdminGuard]},
  { path: 'facebook', component: FacebookComponent ,canActivate:[AuthGaurdService]},
  { path: 'twitter', component: TwitterComponent ,canActivate:[AuthGaurdService]},




];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
