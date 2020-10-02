import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AllServiceService {
  api:any=`http://localhost:4200/endpoint:`;
  // ? HttpHeaders
  headers= new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
  })

 httpOptions = new HttpHeaders({
    "Content-Type" : "application/json",
  })
  httpOptions3 = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  
  constructor(private _httpClient:HttpClient,private _router:Router) { }

  creat():Observable<any>{
    return this._httpClient.get<any>(this.api, { headers : this.headers}).pipe(
      catchError(this.handelError),
      map(x=>{
        console.log(x.headers.get('X-Custom-Header'));
      }),
      tap(x=>x.data)
    );
  }
  
  add(data:any):Observable<any>{
    return this._httpClient.post<any>(this.api,data,{headers:this.headers}).pipe(
      catchError(this.handelError),
      map(x=>x.data),
      tap(x=>x.data)
    );
  }
  
  update(data:any):Observable<any>{
    return this._httpClient.put<any>(this.api,data,{headers:this.headers}).pipe(
      catchError(this.handelError),
      map(x=>x.data),
      tap(x=>x.data)
    );
  }
  
  delete(id:any):Observable<any>{
    return this._httpClient.post<any>(this.api+'/'+id,{headers:this.headers}).pipe(
      catchError(this.handelError),
      map(x=>x.data),
      tap(x=>x.data)
    );
  }
  /* ! *********************************************** */

  login(data:any):Observable<any>{

    return this._httpClient
    .post<any>(this.api, data, { headers: this.headers })
    .pipe(catchError(this.handelError));
  }
  register(data:any){
    return this._httpClient
    .post<any>(this.api, data, { headers: this.headers })
    .pipe(catchError(this.handelError));
  }
  logOut(){
   localStorage.removeItem('token');
   this._router.navigate(['/path']);

  }
  currentUser(){
    let token = localStorage.getItem('token');
    var tokenHeader = new HttpHeaders({
      Authorization: `Bearer${token}`,
    });
    
    // todo 'Authorization', `Bearer ${tokenParse}`
    return this._httpClient
      .get(this.api, { headers: tokenHeader })
      .pipe(catchError(this.handelError));
  }
  getUser(){
    var tokenHeader =new HttpHeaders({'Authorization':'Bearer' +localStorage.getItem('token')});
    this._httpClient.get(this.api+'/path',{headers:tokenHeader});
  }
  getToken() {
    return localStorage.getItem('token');
  }

  role(roles:Array<string>):boolean{
    var is_match=false;
    let allRoles=JSON.parse(localStorage.getItem('token'));
    let dataRoles=allRoles.role
    roles.forEach((element) => {
      dataRoles.forEach((x) => {
        if (x == element) {
          is_match = true;
        }
      })
    });
    return is_match;
  }


  handelError(error:HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
