import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registration } from '../model/Registration';
import { Observable, throwError } from 'rxjs';
import { AppComponent } from '../app.component';
import { BookingDeatils } from '../model/BookingDetails';
import { Choreographer } from '../model/Choreographer';
import { Type } from '@angular/compiler';
import { Feedback } from '../model/Feedback';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  uName: string;

  registerType;

  choreographers:Choreographer;

  selectedChoreographer:Choreographer;

  booking:BookingDeatils;

  nameOfUser;

  userId: string;

  private baseUrl = 'http://localhost:8181'; 
  // private baseUrl =  'https://dance-school1.herokuapp.com'
  

  constructor(private http: HttpClient) { }


  setLogout(): boolean {
    return true;
  }

  register(registration : Registration) : Observable<Object>{
    return this.http.post(`${this.baseUrl}` + `/register`, registration).pipe(
      retry(1),catchError(this.handleError));
  }

  setRegisterType(registerType)
  {
    this.registerType=registerType;
  }

  login(uName,pwd):Observable<any> {
    return this.http.get(`${this.baseUrl}`+`/login/${uName}/${pwd}`).pipe(
      retry(1),catchError(this.handleError));
  }

  handleError(error){
    {
      let errorMessage = '';
       if (error.error instanceof ErrorEvent) {
         // client-side error
         errorMessage = `Error: ${error.error.message}`;
       } else {
         // server-side error
         errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
       }
       window.alert(errorMessage);
       return throwError(errorMessage);
    }
  
  }

  getUserType(mobileNumber){
    return this.http.get(`${this.baseUrl}`+`/getUserType/${sessionStorage.getItem("username")}`);

  }

  getName():Observable<any> {
    this.uName=  sessionStorage.getItem("username")
     return this.http.get(`${this.baseUrl}`+`/getName/${this.uName}`);
   }

   getSessionName():any{
   this.nameOfUser=  sessionStorage.getItem('nameOfUser')
   }

   getUserId(){
    return sessionStorage.getItem("username");
   }

  getChoreographers():Observable<any> {
    return this.http.get(`${this.baseUrl}`+`/getChoreographers`);
  }

  book(book : BookingDeatils) : Observable<Object>{
        return this.http.post(`${this.baseUrl}` + `/book`, book);
  }

  deleteBooking(bookingId,choreographerId) : Observable<Object>{

    return this.http.delete(`${this.baseUrl}` + `/deleteBooking/${bookingId}/${choreographerId}`);
  }


  setSelectedChoreographers(cho:Choreographer){
    this.choreographers=cho;
  }

  getSelectedChoreographers() : any{
    return this.choreographers;
  }

  getAllBookings():Observable<any> {
    return this.http.get(`${this.baseUrl}`+`/getAllBookings`);
  }

  countBookings(choreographerId):Observable<any> {
    return this.http.get(`${this.baseUrl}`+`/countBookings//${choreographerId}`);
  }

  getUserBookings():Observable<any> {
    return this.http.get(`${this.baseUrl}`+`/getUserBookings//${sessionStorage.getItem("username")}`);
  }

  countUserBookings():Observable<any> {
    return this.http.get(`${this.baseUrl}`+`/countUserBookings//${sessionStorage.getItem("username")}`);
  }

  setSelectedChoreographer(selectedChoreographer){
    this.selectedChoreographer=selectedChoreographer
  }
  getSetSelectedChoreographer():any{
    return this.selectedChoreographer;
  }

  SetBooking(booking:BookingDeatils){
    this.booking=booking;
  }

  getBooking(){
    return this.booking;
  }

  addFeedback(feedback:Feedback){
    return this.http.post(`${this.baseUrl}` + `/addFeedback`, feedback);
  }

  getFeedback():any{
    return this.http.get(`${this.baseUrl}` + `/getFeedback`);

  }

  //Admin


  addChoreographer(choreographer : Choreographer) : Observable<Object>{
    return this.http.post(`${this.baseUrl}` + `/addChoreographer`, choreographer);
  }

  editChoreographer(choreographer : Choreographer) : Observable<Object>{
    return this.http.post(`${this.baseUrl}` + `/editChoreographer`, choreographer);
  }

  deleteChoreographer(choreographerId) : Observable<Object>{
    return this.http.delete(`${this.baseUrl}` + `/deleteChoreographer/${choreographerId}`);
  }

  updateBookingStatus(bookingStatus,bookingId) : Observable<Object>{
    return this.http.get(`${this.baseUrl}` + `/updateBookingStatus/${bookingStatus}/${bookingId}`);
  }

  updateCostumeStatus(costumeStatus,bookingId) : Observable<Object>{
    return this.http.get(`${this.baseUrl}` + `/updateCostumeStatus/${costumeStatus}/${bookingId}`);
  }
  paymentStatus(feeStatus,bookingId) : Observable<Object>{
    return this.http.get(`${this.baseUrl}` + `/feeStatus/${feeStatus}/${bookingId}`);
  }

  anounceRewards(rank,reward,bookingId) : Observable<Object>{
    return this.http.get(`${this.baseUrl}` + `/anounceRewards/${rank}/${reward}/${bookingId}`);
  }

  getBookingIds() :any{
    return this.http.get(`${this.baseUrl}` + `/getBookingIds`);
  }
}
