import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable {
    return this.http
      .get('http://server.dev/api/home')
      .map(response => response.data);
  }
}
