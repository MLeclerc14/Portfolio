import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { }

  /**
   * Post contact form
   *
   * @return Observable<any>
   */
  postContactForm(): Observable<any> {
    return this.http
      .get(`http://server.dev/contact/post`)
      .map((response: Response) => response);
  }
}
