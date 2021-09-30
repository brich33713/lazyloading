import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../layers/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class CheckCompanyGuard implements CanActivate {
  constructor(private service: UserService, private router: Router){

  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let company = this.service.getUserCompany("token")
    
    let accountSearch = ["dish","vivint-gift"]
    let fileProcessing = ["efg-partnersweb"]
    if(accountSearch.includes(company)) this.router.navigate(["accountSearch"])
    if(fileProcessing.includes(company)) this.router.navigate(["fileProcessing"])


    return true;
  }
  
}
