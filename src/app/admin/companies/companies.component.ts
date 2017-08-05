import { Component, OnInit, Input } from '@angular/core';
import { GridOptions } from 'ag-grid/main';
import { Company } from '../../models/company';

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


/*
--- Precios
[
    {
        "molde": 900,
        "tinta": 0.02,
        "positivo": 2.33,
        "arte": 1000,
        "solvente": 900,
        "corte": 1000,
        "velocidad": 250,
        "horaImpresion": 2140,
        "empresaId": 1,
        "id": 1,
        "activo": true
    },
    {
        "molde": 0,
        "tinta": 0,
        "positivo": 0,
        "arte": 0,
        "solvente": 0,
        "corte": 0,
        "velocidad": 0,
        "horaImpresion": 0,
        "empresaId": 1,
        "id": 2,
        "activo": true
    }
]


*/
