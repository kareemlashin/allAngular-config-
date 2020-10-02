import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AllServiceService } from './all-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router, private _AuthService: AllServiceService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem('token')) {
      let role = next.data['role'] as Array<string>;
      if (role) {
        if (this._AuthService.role(role)) {
          return true;
        } else if(role[0]=='any'){
          return true;
        }else {
          this._router.navigate(['/component']);
          return false;
        }
      }
    } else if (!localStorage.getItem('token')) {
      return false;
    }
  }
}