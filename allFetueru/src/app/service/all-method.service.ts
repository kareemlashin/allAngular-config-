import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AllMethodService {

  /*
  {
    body: reqParams.body,
    responseType: 'json',
    observe: 'response'
}
  */
  baseUrl:string=``;

  constructor(private _httpClient:HttpClient){}
    // todo get all data
   getPosts():Observable<any>{
    let endPoints="";
    const headers = new HttpHeaders();
    const headers2 = new HttpHeaders({
      'Content-Type': 'application/json'
  });

  const httpHeaders = new HttpHeaders();
  httpHeaders.append('Content-Type', 'application/json');

  const options = {
      headers: httpHeaders
  }; 
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return  this._httpClient.get<any>(this.baseUrl+endPoints,{observe: 'response',
    headers: httpHeaders}).pipe(
      catchError(this.handleError)
    );
  }
    // todo get by id
   getPostById(id:number):Observable<any> {
    let endPoints = "/posts/" + id;
    return this._httpClient.get<any>(this.baseUrl + endPoints).pipe(
      tap((data: any) => {
        console.log(data);
    }),
    map((data: any) => {
      console.log(data);
  }),
      catchError(this.handleError)
    );
  }
    // todo update data
   updatePost(postData: any):Observable<any> {
    let endPoints = "/posts/1"
    return this._httpClient.put<any>(this.baseUrl + endPoints, postData).pipe(
      catchError(this.handleError)
    );
  }
    // todo delete data
  public deletePost(id:number):Observable<any>{
    let endPoints = "/posts/"+id;
    return this._httpClient.delete<any>(this.baseUrl + endPoints).pipe(
      catchError(this.handleError)
    );
  }

  // todo post / send data
 addPost(postData: any):Observable<any> {
  let endPoints = "/posts"
  return this._httpClient.post<any>(this.baseUrl + endPoints, postData);
}
private handleError(error: HttpErrorResponse) {
  let errorMessage = '';

  if (error.error instanceof ErrorEvent) {
    errorMessage ='An error occurred:', error.error.message;
  } else {
    errorMessage =
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`;
  }
  return throwError(
    errorMessage    );
}



handleError2(error) {

  let errorMessage = '';

  if (error.error instanceof ErrorEvent) {
    errorMessage = `Error: ${error.error.message}`;
  } else {
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

  }

  return throwError(errorMessage);

}

}
