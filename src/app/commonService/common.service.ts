import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpService } from './http-service';

@Injectable()
export class CommonService {

    baseUrl: string = environment.api_URL;
    constructor(
        private router: Router,
        private helper: JwtHelperService,
        private httpService: HttpService) {
    }

    setLoginUserDetail(userData) {
        localStorage.setItem('access_token', userData.access_token);
        localStorage.setItem('refresh_token', userData.refresh_Token);
        localStorage.setItem('userId', userData.model.Id);
    }
    getAccessToken() {
        const access_token = localStorage.getItem('access_token');
        return access_token;
    }

    getLoginUserId() {
        const userId = localStorage.getItem('userId');
        return userId;
    }
    // check if token is available and it is expired or not.
    isLoggedIn() {
        if (this.getAccessToken()) {
            if (!this.helper.isTokenExpired(this.getAccessToken())) {
                return true;
            } else {
                this.logout(this.getLoginUserId());
            }
        } else {
            return false;

        }
    }
    // Logout it wiil delete the session and related data from storage
    logout(data) {
        // this.httpService.post('Token/LogOut', data).subscribe((res: any) => {
        //     localStorage.clear();
        //     this.router.navigate(['./login']);
        // });
        localStorage.clear();
        this.router.navigate(['./login']);
    }
}

