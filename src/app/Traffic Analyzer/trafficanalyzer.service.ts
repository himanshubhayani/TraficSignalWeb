import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/commonService/http-service';
@Injectable()
export class TrafficAnalyzerService {

  baseURL: string = environment.api_URL;

  constructor(private httpService: HttpService) { }
  GetConfigDataByUserId(data) {
    return this.httpService.post('Configuration/GetConfigByUserId', data);
  }
}
