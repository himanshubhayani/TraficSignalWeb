import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/commonService/http-service';
@Injectable()
export class HeaderService {

    baseURL: string = environment.api_URL;

    constructor(private httpService: HttpService) { }

    login(url, data) {
        return this.httpService.post(url, data);
    }

    get(url) {
        return this.httpService.get(url);
    }
}
