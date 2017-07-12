import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing } from './dashboard.routing';

import { PieChart } from './pieChart';
import { TrafficChart } from './trafficChart';
import { LineChart } from './lineChart';
import { LineChartService } from './lineChart/lineChart.service';
import { PieChartService } from './pieChart/pieChart.service';
import { TrafficChartService } from './trafficChart/trafficChart.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  declarations: [

    PieChart,
    TrafficChart,    
    LineChart,        
    Dashboard
  ],
  providers: [        
    LineChartService,
    PieChartService,    
    TrafficChartService,    
  ]
})
export class DashboardModule {}
