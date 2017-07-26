import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { DashboardRoutingModule, routedComponents } from './dashboard-routing.module';

import { PieChartComponent } from './pieChart';
import { PieChartService } from './pieChart/pieChart.service';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule, 
    NgaModule,
    DashboardRoutingModule
  ],
  declarations: [
    PieChartComponent,
    routedComponents
  ],
   providers: [    
    PieChartService    
  ]
})
export class DashboardModule { }
