import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CrudAllServiceService {
baseUrl:string=``;
 headers = new HttpHeaders(
   {
  'Content-Type':'application/json; charset=utf-8',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
  }
   );

 
  constructor(private _HttpClient:HttpClient) { }
  get():Observable<any>
  {
   return this._HttpClient.get<any>(this.baseUrl,{headers:this.headers}).pipe(catchError(this.handleError))
  }
  
  post(data:any):Observable<any>
  {
   return this._HttpClient.post<any>(this.baseUrl,data,{headers:this.headers}).pipe(catchError(this.handleError))
  }
  
  put(data:any,id:number):Observable<any>
  {
   return this._HttpClient.put<any>(this.baseUrl+'/is',data,{headers:this.headers}).pipe(catchError(this.handleError))
  }
  delete(id:number):Observable<any>
  {
   return this._HttpClient.delete<any>(this.baseUrl+"/id",{headers:this.headers}).pipe(catchError(this.handleError))
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
//
}
