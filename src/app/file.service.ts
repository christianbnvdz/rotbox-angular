import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  setHttpOptions(expectBlob: boolean) {
    let options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${environment.getUserToken()}`
      }),
      responseType: 'json' as 'json'
    };

    if (expectBlob) options.responseType = 'blob' as 'json';

    return options;
  }

  getFiles() {
    return this.http.get<any>(environment.constructGetFilesUrl(), this.setHttpOptions(false));
  }

  downloadFile(fileid: string) {
    return this.http.get<any>(`${environment.constructGetFilesUrl()}/${fileid}`, this.setHttpOptions(true));
  }
}
