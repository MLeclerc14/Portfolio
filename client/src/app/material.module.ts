import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatSidenavModule } from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatToolbarModule],
  exports: [MatButtonModule, MatToolbarModule],
})
export class MaterialModule { }