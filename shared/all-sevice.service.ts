import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AllSeviceService {
  baseUrl: string = ``;
  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
  });
  constructor(private _HttpClient: HttpClient) {}
  // ? login
  login(data: any): Observable<any> {
    return this._HttpClient
      .post<any>(this.baseUrl, data, { headers: this.headers })
      .pipe(catchError(this.handelError));
  }
  // ? register
  register(data: any): Observable<any> {
    return this._HttpClient
      .post<any>(this.baseUrl, data, { headers: this.headers })
      .pipe(catchError(this.handelError));
  }
// ! log out
  logOut() {
    localStorage.removeItem('token');
  }
  // ! get user
  getUser() {
    let token = localStorage.getItem('token');
    var tokenHeader = new HttpHeaders({
      Authorization: `Bearer${token}`,
    });
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    // todo 'Authorization', `Bearer ${tokenParse}`
    return this._HttpClient
      .get(this.baseUrl, { headers: tokenHeader })
      .pipe(catchError(this.handelError));
  }
  // ! get token
  getToken() {
    return localStorage.getItem('token');
  }
  // ! grt role
  role(roles:Array<string>):boolean{
    var is_match=false;
    let payLoad = JSON.parse(localStorage.getItem('token').split('.')[1]);
    let userRoles = payLoad.role;
    roles.forEach(x=>{
      if (x==userRoles) {
        is_match=true;
      }
    })
    return is_match;
  }
  // ! handelError

  handelError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
