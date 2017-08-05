import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule, routedComponents } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { AgGridModule } from 'ag-grid-angular/main';
import { CompanyConfigComponent } from './company-config/company-config.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,    
    AgGridModule.withComponents([]),
  ],
  declarations: [
    AdminComponent,
    routedComponents,
    CompanyConfigComponent
  ]
})

export class AdminModule { }
