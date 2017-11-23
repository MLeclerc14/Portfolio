import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent }       from './posts.component';
import { PostDetailComponent }  from './post-detail/post-detail.component';

const postsRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PostsComponent,
    children: [{ path: ':id', component: PostDetailComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(postsRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class PostRoutingModule { }
