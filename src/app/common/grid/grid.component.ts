import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, AfterViewInit {
  settings: jqwidgets.GridOptions = {};
  source: any = {};
  cols: any[] = [];

  private dataAdapter: any = {};

  @Output() onRowSelected: EventEmitter<Function> = new EventEmitter<Function>();
  @ViewChild('indusoftGrid') grid: jqxGridComponent; 
  
  constructor() { 
    
  }

  ngAfterViewInit(): void {
    this.dataAdapter = new jqx.dataAdapter(this.source);
    this.settings = {
      width: '100%',
      source: this.dataAdapter,
      pageable: true,
      autoheight: true,
      sortable: true,
      altrows: true,
      enabletooltips: true,
      editable: false,
      scrollmode: '"deferred"',
      columns: this.cols
    };
    this.grid.createWidget(this.settings);
  }
  
  ngOnInit() { }

  rowSelected(event): void { 
    this.onRowSelected.emit(event);
  }

}