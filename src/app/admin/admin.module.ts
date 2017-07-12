import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CompaniesComponent } from './companies/companies.component';
import { MaterialsComponent } from './materials/materials.component';
import { SellersComponent } from './sellers/sellers.component';
import { CustomersComponent } from './customers/customers.component';
import { LinesComponent } from './lines/lines.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [CompaniesComponent, MaterialsComponent, SellersComponent, CustomersComponent, LinesComponent]
})
export class AdminModule { }
