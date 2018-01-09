import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridComponent } from './grid/grid.component';
import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';
import { IndusoftService } from 'app/common/indusoft-service/indusoft.service';
import { DisplayErrorsComponent } from 'app/common/display-validation-errors/display-errors.component';
import { TypeAheadValidatorDirective } from 'app/common/validators/typeahead-validator.directive';
import { NumericValidatorDirective } from 'app/common/validators/numeric-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    GridComponent, 
    jqxGridComponent,
    DisplayErrorsComponent,
    TypeAheadValidatorDirective,
    NumericValidatorDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    GridComponent,
    jqxGridComponent,
    NgbModule,
    DisplayErrorsComponent,
    TypeAheadValidatorDirective,
    NumericValidatorDirective
  ],
  providers: [
    IndusoftService
  ]
})
export class SharedModule { }
