import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { environment } from "./../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class OneService {
  baseUrl:string=``;
base:any=environment.API_URL;
  constructor(private _HttpClient:HttpClient) { }
register(data:any){
  return this._HttpClient.post<any>(this.baseUrl,data);

}
login(data:any){
  return this._HttpClient.post<any>(this.baseUrl,data);

}
getUser():Observable<any>{
let token=this.getToken();
return this._HttpClient.get<any>(this.baseUrl, {headers: {'Authorization': 'Bearer ' + token}});
}
getToken(){
  return localStorage.getItem('token');
}
logOut(){
  localStorage.removeItem('token');
}
  //
roles(z:Array<string>):boolean{
  let ismatch=false;
  let x=JSON.parse(localStorage.getItem('token').split('.')[1]);
  let m=x.token;
z.forEach(element => {
 if (m==x) {
   ismatch=true;
   return;
 } 
});
return ismatch;
}
}
