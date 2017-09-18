import { NgModule } from '@angular/core';

import { AdminRoutingModule, routedComponents } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { AgGridModule } from 'ag-grid-angular/main';
import { CompanyConfigComponent } from './company-config/company-config.component';


import { SharedModule } from '../common/shared.module';

@NgModule({
  imports: [
    AdminRoutingModule,   
    SharedModule, 
    AgGridModule.withComponents([])
  ],
  declarations: [
    AdminComponent,
    routedComponents,
    CompanyConfigComponent
  ]
})

export class AdminModule { }
