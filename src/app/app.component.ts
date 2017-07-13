import { Component, ViewContainerRef, AfterViewInit, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import * as $ from 'jquery';

import { GlobalState } from './global.state';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from './theme/services';
import { BaThemeConfig } from './theme/theme.config';
import { layoutPaths } from './theme/theme.constants';

import { BaMenuService } from './theme';
import { APP_MENU } from './app.menu';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styleUrls: ['./app.component.scss'],  
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit {

  isMenuCollapsed: boolean = false;

  constructor(private _state: GlobalState,
              private _imageLoader: BaImageLoaderService,
              private _spinner: BaThemeSpinner,
              private viewContainerRef: ViewContainerRef,
              private themeConfig: BaThemeConfig,
              private _menuService: BaMenuService) {

    themeConfig.config();

    this._loadImages();

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>APP_MENU);
  }

  ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }

  private _loadImages(): void {
    // register some loaders
    BaThemePreloader.registerLoader(this._imageLoader.load('/assets/img/sky-bg.jpg'));
  }

}
