import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../shared/material.module';
import { BlogComponent } from './blog.component';
import { BlogService } from './blog.service';

@NgModule({
  imports: [HttpModule, BrowserModule, MaterialModule],
  exports: [],
  declarations: [BlogComponent],
  providers: [BlogService]
})
export class BlogModule { }
