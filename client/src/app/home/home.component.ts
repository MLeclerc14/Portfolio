import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit  {

  posts: any[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://server.dev/api/home').subscribe(res => {
      this.posts = res.data.posts;
    });
  }
}
