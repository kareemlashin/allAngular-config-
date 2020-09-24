import { Observable, throwError } from 'rxjs';
import {  catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse  } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
basUrl=``;
headers2={
  headers:new HttpHeaders({
    "content-type":"app;action/json"
  })
}
//  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private _HttpClient:HttpClient) { }

  pagination(page:number):Observable<any>{
  return  this._HttpClient.get("https://gorest.co.in/public-api/users?page="+ page);

  }
  getAccessToken() {
    return localStorage.getItem('access_token');
  }
   isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }
  logout() {
    if (localStorage.removeItem('access_token') == null) {
     // this.router.navigate(['users/login']);
    }
  }

  register(data:any):Observable<any>{
    return this._HttpClient.post(this.basUrl,data).pipe(catchError(this.handleError));
  }
  
  login(data:any):Observable<any>{
    return this._HttpClient.post(this.basUrl,data).pipe(catchError(this.handleError));
  }
  getUser(){
    var tokenHeader =new HttpHeaders({'Authorization':'Bearer' +localStorage.getItem('token')});
    this._HttpClient.get(this.basUrl+'/path',{headers:tokenHeader});
  }
  
  getRoles(x:Array<string>):boolean{
    var isMatch=false;
    let token=JSON.parse(localStorage.getItem('token').split('.')[1]);
    var userRole=token.role;
    x.forEach(element => {
    if (userRole==element) {
      isMatch=true;
    } 
    });
    return isMatch;
  }

  role(x:Array<string>):boolean{
    let d=false;
    let userRole=JSON.parse(localStorage.getItem('token'));
    var userRole2=userRole.role as Array<string>;
    userRole2.forEach(element => {
      if (userRole2.includes(element)) {
        d=true;
        return;
      }else{
        d=false;
      }
    });
    return d;
  }
  
 handleError(error) {

  let errorMessage = '';

  if (error.error instanceof ErrorEvent) {


    errorMessage = `Error: ${error.error.message}`;

  } else {


    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

  }


  return throwError(errorMessage);

}
handleError2(error: HttpErrorResponse) {
  let msg = '';
  if (error.error instanceof ErrorEvent) {
    // client-side error
    msg = error.error.message;
  } else {
    // server-side error
    msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(msg);
}

}
