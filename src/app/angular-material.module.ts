import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
// import { MatSortModule } from '@angular/material/sort';
import {MatSortModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';

@NgModule({
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  exports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ]
})

export class AngularMaterialModule {}