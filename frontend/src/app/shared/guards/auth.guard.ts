import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SalesService } from 'src/app/sales.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private salesService:SalesService,
    private router:Router
   ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

    console.log(this.salesService.hasAuth);
    
    if (!this.salesService.hasAuth){
       this.router.navigate(['/login']);
       return false;
    }

    return true;
    
  }
  
}
