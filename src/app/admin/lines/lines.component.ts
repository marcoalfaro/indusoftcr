import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid/main';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit {
  gridOptions: GridOptions;
  columnDefs: any[];
  rowData: any[];

  constructor() { 
    this.gridOptions = <GridOptions>{};
    this.columnDefs = [
          { headerName: 'Make', field: 'make' },
          { headerName: 'Price', field: 'price' }
      ];

      this.rowData = [
          { make: 'Toyota', model: 'Celica', price: 35000 },
          { make: 'Ford', model: 'Mondeo', price: 32000 },
          { make: 'Porsche', model: 'Boxter', price: 72000 }
      ];
  }  

  ngOnInit() {
    
  }

  onGridReady(params) {
    params.api.sizeColumnsToFit();
  }

  selectAllRows() {
    this.gridOptions.api.selectAll();
  }
}
