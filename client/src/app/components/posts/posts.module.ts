import { NgModule }          from '@angular/core';
import { HttpModule }        from '@angular/http';
import { CommonModule }      from '@angular/common';
import { FlexLayoutModule }  from '@angular/flex-layout';
import { MaterialModule }    from '../shared/material.module';
import { PostRoutingModule } from './posts-routing.module';

import { PostService }         from '../../services/post.service';
import { PostsComponent }      from './posts.component';
import { PostListComponent }   from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    PostRoutingModule
  ],
  exports: [],
  declarations: [
    PostsComponent,
    PostListComponent,
    PostDetailComponent
  ],
  providers: [PostService]
})
export class PostsModule { }
