import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { HomeService } from './home.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit  {

  public posts: Observable<any>;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    console.log(this.homeService.getPosts());
    //this.posts = this.homeService.getPosts().data.posts;
  }
}
