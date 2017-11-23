import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { HomeService } from '../../services/home.service';
import { Post } from '../../models/post.model';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit  {

  public posts: Post[];

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.list().subscribe((response) => {
      this.posts = response.data.posts;
    });
  }
}
