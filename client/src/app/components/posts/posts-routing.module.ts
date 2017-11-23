import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent }    from './post-list/post-list.component';
import { PostDetailComponent }  from './post-detail/post-detail.component';

const postsRoutes: Routes = [
  { path: 'posts/:slug', component: PostDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(postsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostRoutingModule { }
