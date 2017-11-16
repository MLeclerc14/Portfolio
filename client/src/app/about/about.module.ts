import { NgModule } from '@angular/core';
import { MatTabsModule, MatListModule, MatButtonModule, MatIconModule, MatExpansionModule } from '@angular/material';
import { AboutComponent } from './about.component';


@NgModule({
  imports: [MatTabsModule, MatIconModule, MatButtonModule, MatListModule, MatExpansionModule],
  exports: [],
  declarations: [AboutComponent]
})
export class AboutModule { }
