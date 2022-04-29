import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  setHttpOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${environment.getUserToken()}`
      })
    };
  }

  getFiles() {
    return this.http.get<any>(environment.constructGetFilesUrl(), this.setHttpOptions());
  }
}
