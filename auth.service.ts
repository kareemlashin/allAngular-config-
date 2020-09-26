import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = ``;
  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
  });
  constructor(private _HttpClient: HttpClient) {}
  register(data: any): Observable<any> {
    return this._HttpClient
      .post<any>(this.baseUrl, data, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  login(data: any): Observable<any> {
    return this._HttpClient
      .post<any>(this.baseUrl, data, { headers: this.headers })
      .pipe(catchError(this.handleError));
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
  getToken() {
    return localStorage.getItem('token');
  }
  getUser() {
    var tokenHeader = new HttpHeaders({
      Authorization: 'Bearer' + localStorage.getItem('token'),
    });
    var tokenHeader2 = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    var tokenHeader3 = new HttpHeaders({
      Authorization: `Bearer ${this.getToken()}`,
    });
    return this._HttpClient
      .get<any>(this.baseUrl, { headers: tokenHeader })
      .pipe(catchError(this.handleError));
  }

  logOut() {
    localStorage.removeItem('token');
  }

  roleMatch(roles: Array<string>): boolean {
    let isMatch = false;
    let payLoad = JSON.parse(localStorage.getItem('token').split('.')[1]);
    let userRoles = payLoad.role;
    roles.forEach((element) => {
      if (userRoles == element) {
        isMatch = true;
      } else {
        isMatch = false;
      }
    });
    return isMatch;
  }
  addToken() {
    window.sessionStorage.setItem('userInfo-token', '');
    var token = window.sessionStorage.getItem('userInfo-token');
    window.sessionStorage.removeItem('token');
  }

  /******************* */
  // crud
  get(): Observable<any> {
    return this._HttpClient
      .get(this.baseUrl, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }
  getId(id: number): Observable<any> {
    return this._HttpClient
      .get(this.baseUrl + id, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }
  post(url: string, model: any): Observable<any> {
    return this._HttpClient
      .post(url, model, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }
  put(url: string, id: number, model: any): Observable<any> {
    return this._HttpClient
      .put(url + id, model, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }
  delete(url: string, id: number): Observable<any> {
    return this._HttpClient
      .delete(url + id, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }
}
