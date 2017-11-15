import { NgModule } from '@angular/core';
import { MatSidenavModule, MatListModule, MatIconModule } from '@angular/material';
import { BlogComponent } from './blog.component';


@NgModule({
  imports: [MatSidenavModule, MatIconModule, MatListModule],
  exports: [MatSidenavModule, MatIconModule, MatListModule],
  declarations: [BlogComponent]
})
export class BlogModule { }
