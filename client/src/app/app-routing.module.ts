import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projets', component: ProjectComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    ProjectComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
