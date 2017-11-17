import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatProgressBarModule,
    MatExpansionModule.
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule
  } from '@angular/material';


@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
