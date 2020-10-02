import { OneService } from './one.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OneGuard implements CanActivate {
  constructor(private OneService:OneService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!localStorage.getItem('token')) {
        return false;
      } else {
        let roles=next.data['roles'];
        if (roles) {
          if (this.OneService.roles(roles) ) {
            return true
          }else{
            return false
          }
        }
      }
  }
  
}
