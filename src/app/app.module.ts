import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

/*
 * Platform and Environment providers/directives/pipes
 */
import { AppRoutingModule, routableComponents } from './app-routing.module';

import './rxjs-extensions';
import { AgGridModule } from 'ag-grid-angular/main';

// App is our top level component
import { AppComponent } from './app.component';
import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { NgaModule } from './theme/nga.module';

import { AppTranslationModule } from './app.translation.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from './common/confirm.component';

// Application wide providers
const APP_PROVIDERS = [
  AppState,
  GlobalState,
];

export type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void,
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  entryComponents: [
    ConfirmComponent
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,    
    routableComponents,
    ConfirmComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),    
    CommonModule,
    AppTranslationModule,    
    DashboardModule,    
    AppRoutingModule,
    ToastModule.forRoot(),
    BootstrapModalModule.forRoot({ container: document.body })
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS,
    { provide: APP_BASE_HREF, useValue : '/' }
  ],
})

export class AppModule {

  constructor(public appState: AppState) {
  }
}
