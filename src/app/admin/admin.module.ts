import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule, routedComponents } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { AgGridModule } from 'ag-grid-angular/main';
import { CompanyConfigComponent } from './company-config/company-config.component';
import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    AdminRoutingModule,    
    AgGridModule.withComponents([]),
  ],
  declarations: [
    AdminComponent,
    routedComponents,
    CompanyConfigComponent, 
    jqxGridComponent  
  ]
})

export class AdminModule { }
