import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  /**
   * Get all posts
   *
   * @return Observable<any>
   */
  list(page?: number): Observable<any> {
    return this.http
      .get(`http://server.dev/api/posts?page=` + page)
      .map((response: Response) => response);
  }
}
