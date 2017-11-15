import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';
import { BlogComponent } from './blog.component';


@NgModule({
  imports: [MatSidenavModule],
  exports: [MatSidenavModule],
})
export class BlogModule { }