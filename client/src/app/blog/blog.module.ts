import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '../shared/material.module';
import { BlogComponent } from './blog.component';
import { BlogService } from './blog.service';

@NgModule({
  imports: [MaterialModule, HttpModule],
  exports: [],
  declarations: [BlogComponent],
  providers: [BlogService]
})
export class BlogModule { }
