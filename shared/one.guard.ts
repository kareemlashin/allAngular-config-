import { AllSeviceService } from './all-sevice.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OneGuard implements CanActivate {
  constructor(private _router:Router,private _all:AllSeviceService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!localStorage.getItem('token')) {
        this._router.navigate(['/login']);
        return false;
      }else{
        if (localStorage.getItem('token')) {
          let roles=next.data['role'] as Array<string>;
          if (this._all.role(roles)){
            return true;
          }
        }
      }
  }
}
