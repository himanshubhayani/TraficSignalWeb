import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/commonService/http-service';
@Injectable()
export class SignupService {

    baseURL: string = environment.api_URL;

    constructor(private httpService: HttpService) { }

    create(data) {
        return this.httpService.post('User/CreateUser', data);
    }
    getAllUser(){
        debugger
        return this.httpService.get('User/GetAllUser');
    }
}
