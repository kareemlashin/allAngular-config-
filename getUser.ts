import { HttpHeaders } from "@angular/common/http";

getUser(){
    var tokenHeader =new HttpHeaders({'Authorization':'Bearer' +localStorage.getItem('token')});
    this._HttpClient.get(this.basUrl+'/path',{headers:tokenHeader});
  }
  