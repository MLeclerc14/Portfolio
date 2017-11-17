import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeService } from './home.service';
import { Post } from '../blog/post';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit  {

  posts: Post[];

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.homeService.getPosts()
    .subscribe(posts => this.posts = posts);
  }
}
