import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from '../admin/admin.module';
import { CompaniesComponent } from '../admin/companies/companies.component';
import { CustomersComponent } from '../admin/customers/customers.component';
import { LinesComponent } from '../admin/lines/lines.component';
import { MaterialsComponent } from '../admin/materials/materials.component';
import { SellersComponent } from '../admin/sellers/sellers.component';

const routes: Routes = [  
  { 
    path: '',
    children: [      
      { path: 'companies', component: CompaniesComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'lines', component: LinesComponent },
      { path: 'materials', component: MaterialsComponent },
      { path: 'sellers', component: SellersComponent },
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

export const routedComponents = [ 
  CompaniesComponent, 
  CustomersComponent, 
  LinesComponent, 
  MaterialsComponent, 
  SellersComponent 
];
