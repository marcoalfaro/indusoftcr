import { NgModule } from '@angular/core';

import { AdminRoutingModule, routedComponents } from './admin-routing.module';
import { AdminComponent } from './admin.component'
import { AgGridModule } from 'ag-grid-angular/main';
import { SharedModule } from '../common/shared.module';
import { LinesService } from './lines/lines.service';

@NgModule({
  imports: [
    AdminRoutingModule,   
    SharedModule, 
    AgGridModule.withComponents([])
  ],
  declarations: [
    AdminComponent,
    routedComponents//,    
    //LinesService
  ]
})

export class AdminModule { }
