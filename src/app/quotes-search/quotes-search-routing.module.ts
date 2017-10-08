import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesSearchComponent } from './quotes-search.component';

const routes: Routes = [  
  {
    path: '', 
    component: QuotesSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesRoutingModule { }

export const routedComponents = [
  QuotesSearchComponent 
];
