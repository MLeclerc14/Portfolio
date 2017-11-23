import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PostRoutingModule } from './posts-routing.module';

import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    PostRoutingModule
  ],
  exports: [],
  declarations: [
    PostListComponent,
    PostDetailComponent
  ]
})
export class PostsModule { }
