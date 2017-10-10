import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridComponent } from './grid/grid.component';
import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';
import { IndusoftService } from 'app/common/indusoft-service/indusoft.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    GridComponent, 
    jqxGridComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    GridComponent,
    jqxGridComponent,
    NgbModule
  ],
  providers:[
    IndusoftService
  ]
})
export class SharedModule { }
