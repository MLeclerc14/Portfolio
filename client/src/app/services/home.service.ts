import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Post } from '../models/post.model';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  /**
   * Get last 5 posts
   *
   * @return Observable<any>
   */
  list(): Observable<any> {
    return this.http
      .get(`http://server.dev/api/home`)
      .map((response: Response) => response);
  }
}
