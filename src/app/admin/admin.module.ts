import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule, routedComponents } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { AgGridModule } from 'ag-grid-angular/main';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,    
    AgGridModule.withComponents([]),
  ],
  declarations: [
    AdminComponent,
    routedComponents
  ]
})

export class AdminModule { }
