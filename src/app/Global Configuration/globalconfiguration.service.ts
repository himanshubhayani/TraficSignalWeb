import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../commonService/http-service';


@Injectable()
export class GlobalConfigurationService {
    baseUrl = environment.api_URL;
    constructor(private httpService: HttpService) { }
    SaveConfig(data) {
        return this.httpService.post('Configuration/SaveConfig', data);
    }
    // DeletePost(data) {
    //     return this.httpService.post('Admin/DeletePost', data);
    // }
    // GetAllTags() {
    //     return this.httpService.get('Admin/GetAllTags');
    // }
    // GetAllPost(data) {
    //     return this.httpService.post('Admin/GetAllPost', data);
    // }
    // GetPostById(data) {
    //     return this.httpService.post('Admin/GetPostById', data);
    // }
}