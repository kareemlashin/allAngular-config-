import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router, private _AuthService: AuthService) {}
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
        if (this._AuthService.roleMatch(role)) {
          return true;
        } else {
          this._router.navigate(['/component']);
          return false;
        }
      }
    } else if (!localStorage.getItem('token')) {
      return false;
    }
  }
}
