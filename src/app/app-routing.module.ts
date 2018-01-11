import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [  
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },    
    { path: 'dashboard', component: DashboardComponent },
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
    { path: 'quotes', loadChildren: 'app/quotes/quotes.module#QuotesModule' },
    { path: 'quotes/:id', loadChildren: 'app/quotes/quotes.module#QuotesModule' },
    { path: 'quotesSearch', loadChildren: 'app/quotes-search/quotes-search.module#QuotesSearchModule' },
    { path: '**', redirectTo: 'dashboard' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [];

// export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true, enableTracing: true });
