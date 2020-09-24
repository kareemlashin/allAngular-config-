import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _HttpClient:HttpClient) { }

  pagination(page:number):Observable<any>{
  return  this._HttpClient.get("https://gorest.co.in/public-api/users?page="+ page).pipe(catchError(this.errorHandler));

  }
  errorHandler(error: HttpErrorResponse) {
    let msg;
    if (error.error instanceof ErrorEvent) {
      msg='An error occurred:', error.error.message;
    } else {
      msg=        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`;
    }
    return throwError(
      msg);
  }

}
