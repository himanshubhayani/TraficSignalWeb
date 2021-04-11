import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpService } from '../commonService/http-service';

@Injectable()
export class SharedService {

    baseUrl: string = environment.api_URL;


    constructor(
        private router: Router,
        private httpService: HttpService) {
    }


}
