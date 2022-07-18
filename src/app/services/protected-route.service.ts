import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { FakeAuth } from './fake-auth.service';

@Injectable({ providedIn: 'root' })
export class ProtectedRouteService implements CanActivate {
  constructor(private auth: FakeAuth, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return new Promise((resolve, _) => {
      const token = localStorage.getItem('token');
      const id = localStorage.getItem('id');

      if (token && id) {
        resolve(true);
      } else {
        this.router.navigate(['/auth']);
      }
    });
  }
}
