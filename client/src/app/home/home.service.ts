import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Post } from '../blog/post';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HomeService {

  private homeUrl = 'http://server.dev/api/home';

  constructor(private http: HttpClient) { }

  /** GET Posts from the server */
  getPosts (): Observable<Post[]> {
    return this.http.get<Post[]>(this.homeUrl)
      .map(res => res.data.posts);
  }
}
