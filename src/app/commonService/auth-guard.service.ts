import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CommonService } from './common.service';

@Injectable()
export class AuthGuard implements CanActivate {

    helper = new JwtHelperService();
    constructor(private router: Router, private commonService: CommonService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.commonService.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['./login']);
        }
    }
}
