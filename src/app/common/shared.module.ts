import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridComponent } from './grid/grid.component';
import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    GridComponent, 
    jqxGridComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    GridComponent,
    jqxGridComponent
  ]
})
export class SharedModule { }
