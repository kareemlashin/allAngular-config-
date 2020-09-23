import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router:Router,private _AuthService:AuthService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!localStorage.getItem('auth')) {
        this._router.navigate(['/login']);
        
        return false;

      }else{
        const ro=next.data['role'] as Array<string>;
        if (ro) {
          const match=this._AuthService.role(ro);
          if (match) {
            return true;
          }else{
            this._router.navigate(['/login']);
          }
        }
        let roles=next.data['permittedRoles']as Array<string>
        if (roles) {
          if (this._AuthService.getRoles(roles)) {
          }
        }

      }
      return true;


  }
  
}
