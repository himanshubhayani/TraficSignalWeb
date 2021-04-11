import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { InterceptorSkipHeader } from './http-intercepter.service';

@Injectable()
export class HttpService {
    baseURL = environment.api_URL;
    constructor(private http: HttpClient) { }

    get(url: string) {
        return this.http.get(this.baseURL + url);
    }

    post(url: string, data: any) {
        return this.http.post(this.baseURL + url, data);
    }
    /**
    * Make POST for the image upload with authentication token
    * @param url
    * @param file
    */
    authImageUpload(url: string, file: any) {
        let input = new FormData();
        input.append('file', file);
        let headers = new HttpHeaders()
            .set('InterceptorSkipHeader', 'X-Skip-Interceptor')
            .set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
        //headers = headers.set('Accept', 'application/json');
        // headers.set('InterceptorSkipHeader', 'X-Skip-Interceptor');
        // headers.set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
        return this.http
            .post<any>(this.baseURL + url, input, { headers });
    }

    authFileUpload(url: string, data: any) {
        let input = new FormData();
        input.append('file', data.file);
        let keyData = Object.keys(data);
        let valueData = Object.values<any>(data);
        keyData.forEach((key, indx) => {
            if (key != 'file')
                input.append(key, valueData[indx]);
        });

        let headers = new HttpHeaders()
            .set('InterceptorSkipHeader', 'X-Skip-Interceptor')
            .set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
        //headers = headers.set('Accept', 'application/json');
        // headers.set('InterceptorSkipHeader', 'X-Skip-Interceptor');
        // headers.set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
        return this.http
            .post<any>(this.baseURL + url, input, { headers });
    }

    /**
   * POST multiple file with authentication token
   * @param url
   * @param files
   * @param model
   */
    authMultipleFileUpload(url: string, files: any[], model?: any) {

        let input = new FormData();

        if (files && files.length > 0) {
            for (let file of files) {
                input.append("files", file);
            }
        }

        //input.append('model', JSON.stringify(model));
        let headers = new HttpHeaders()
            .set('InterceptorSkipHeader', 'X-Skip-Interceptor')
            .set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));

        return this.http
            .post<any>(this.baseURL + url, input, { headers });
    }

    postFile(url: string, data: any, options: any) {
        return this.http.post(this.baseURL + url, data, options);
    }

    delete(url: string) {
        return this.http.delete(this.baseURL + url);
    }

    put(url: string, data: any) {
        return this.http.put(this.baseURL + url, data);
    }

    getFromFile(url: string) {
        return this.http.get(url);
    }

    getCSVFile(url: string) {
        return this.http.get(url, { responseType: 'blob' });
    }

    // authUpload(url: string, file: any) {
    //     let input = new FormData();
    //     input.append("file", file);

    //     let headers = new HttpHeaders();
    //     // headers = headers.set('Accept', 'application/json');
    //     // headers = headers.set('Content-Type', 'multipart/form-data');
    //     // headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
    //     headers = headers.set('Content-Type', 'application/json');
    //     headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    //     const httpOptions = { headers: headers };
    //     return this.http.post(this.baseURL + url, input, httpOptions);

    //     // let input = new FormData();
    //     // input.append('file', file);
    //     // let headers = new HttpHeaders();
    //     // headers = headers.set('Accept', 'multipart/form-data');
    //     // headers = headers.set('Content-Type', 'application/json');
    //     // headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    //     // const httpOptions = { headers: headers };
    //     // return this.http
    //     //     .post<any>(this.baseURL + url, input, httpOptions);
    //   }

    authUpload(url: string, file: any) {
        let input = new FormData();
        input.append('file', file);
        let headers = new HttpHeaders();
        headers = headers.set('Accept', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
        const httpOptions = { headers: headers };
        return this.http
            .post<any>(this.baseURL + url, input, httpOptions);
    }

}
