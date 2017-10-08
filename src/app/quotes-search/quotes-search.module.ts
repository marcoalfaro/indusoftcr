import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesRoutingModule, routedComponents } from './quotes-search-routing.module';

import { SharedModule } from '../common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    QuotesRoutingModule,
    SharedModule
  ],
  declarations: [    
    routedComponents
  ]
})
export class QuotesSearchModule { }
