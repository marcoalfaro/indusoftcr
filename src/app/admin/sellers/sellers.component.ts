import { Component, OnInit, Input } from '@angular/core';
import { GridOptions } from 'ag-grid/main';
import { Seller } from '../../models/seller';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.scss']
})
export class SellersComponent implements OnInit {  
  gridOptions: GridOptions;
  columnDefs: any[];
  filteredData: any[];
  selectedItem: Seller = new Seller();
  
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
          { headerName: '', field: 'nombre' }
    ];
    this.filteredData = this.getData();    
  }

  getData() {
      return [
        {
            'nombre': 'Geovanni Ugalde',
            'email': 'gugalde@empresa1.com',
            'telefono': '390-3817',
            'beeper': '257-8585',
            'empresaId': 1,
            'id': 1,
            'activo': true
        },
        {
            'nombre': 'Alex Gonzalez',
            'email': 'agonzalez@empresa1.com',
            'telefono': '843-7235',
            'beeper': '257-8585',
            'empresaId': 1,
            'id': 2,
            'activo': true
        },
        {
            'nombre': 'Rafael Zamora',
            'email': 'rzamora@empresa1.com',
            'telefono': '356-9917',
            'beeper': '',
            'empresaId': 1,
            'id': 3,
            'activo': true
        },
        {
            'nombre': 'Nelly Rodriguez Lopez.',
            'email': 'nrodriguez@empresa1.com',
            'telefono': '440-4673',
            'beeper': '',
            'empresaId': 1,
            'id': 4,
            'activo': true
        },
        {
            'nombre': 'Geovanni Ugalde Gómez0',
            'email': 'gugalde@empresa1.com',
            'telefono': '390-3917',
            'beeper': '257-8585',
            'empresaId': 1,
            'id': 5,
            'activo': true
        },
        {
            'nombre': 'Mathew Carrasco  C.',
            'email': 'mcarrasco@empresa1.com',
            'telefono': '864-4819',
            'beeper': '',
            'empresaId': 1,
            'id': 6,
            'activo': true
        },
        {
            'nombre': 'William Guillen Sánchez',
            'email': 'wguillen@empresa1.com',
            'telefono': '88-29-710-74',
            'beeper': '',
            'empresaId': 1,
            'id': 7,
            'activo': true
        },
        {
            'nombre': 'Cibelly Nuñez González',
            'email': 'cnunez@empresa1.com',
            'telefono': '8848-5122',
            'beeper': '',
            'empresaId': 1,
            'id': 8,
            'activo': true
        }
    ];
  }
}
