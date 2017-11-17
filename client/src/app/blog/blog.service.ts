import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {

  constructor(private http: Http) {}

  /*getAll(): Observable {
    return this.http
               .get('http://server.dev/api/posts')
               .map(response => response.json());
  }*/
}
