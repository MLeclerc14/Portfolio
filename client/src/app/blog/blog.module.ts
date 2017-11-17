import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { BlogComponent } from './blog.component';


@NgModule({
  imports: [MaterialModule],
  exports: [],
  declarations: [BlogComponent]
})
export class BlogModule { }
