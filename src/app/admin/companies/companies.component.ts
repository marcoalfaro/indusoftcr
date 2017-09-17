import { Component, OnInit, Input } from '@angular/core';
import { GridOptions } from 'ag-grid/main';
import { Company } from 'app/models/company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {  
  gridOptions: GridOptions;
  columnDefs: any[];
  filteredData: any[];
  selectedItem: Company = new Company();
  
  ngOnInit() {
    this.configureGrid();
  }

  filterChanged(event) {
    const filter: string = event.target.value.toLowerCase();
    this.filteredData = this.getData().filter(item => item.nombre.toLowerCase().includes(filter));
  }  

  selectRow(event) {      
      if (event.node.selected) {
            this.selectedItem = event.node.data;
      }        
  }

  onGridReady(params) {    
    params.api.sizeColumnsToFit();
  }

  configureGrid() {
    this.gridOptions = <GridOptions>{};
    this.columnDefs = [          
          { headerName: 'Nombre', field: 'nombre' },
          { headerName: 'Activo', field: 'activo' }
    ];
    this.filteredData = this.getData();    
  }

  getData() {
      return [          
        {
          'nombre': 'Empresa #1',
          'id': 1,
          'activo': true
        },
        {
            'nombre': 'Otra Empresa',
            'id': 2,
            'activo': false
        }
    ];
  }
}
