import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesRoutingModule, routedComponents } from './quotes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    QuotesRoutingModule
  ],
  declarations: [    
    routedComponents
  ]
})
export class QuotesModule { }
