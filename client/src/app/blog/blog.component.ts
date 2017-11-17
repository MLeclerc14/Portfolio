import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{

  posts: Post[];

  constructor(private BlogService: BlogService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.BlogService.getAll()
        .subscribe(posts => this.posts = posts);
  }
}
