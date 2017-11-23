import { Component, OnInit } from '@angular/core';
import { PageEvent }         from '@angular/material';

import { PostService } from '../../../services/post.service';
import { Post }        from '../../../models/post.model';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public posts: Post[];
  public pagination;
  public page = 1;
  public pageEvent: PageEvent;
  public isLoaded: boolean = false;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.list(this.page);
  }

  public changePage(pageEvent): void {
    this.page = pageEvent.pageIndex++;
    window.scrollTo(0, 0);
    this.list(this.page);
  }

  public list(page: number): void {
    this.postService.list(page).subscribe((response) => {
      this.posts = response.data.posts.data;
      delete(response.data.posts.data);
      this.pagination = response.data.posts;
      this.isLoaded = true;
    });
  }
}
