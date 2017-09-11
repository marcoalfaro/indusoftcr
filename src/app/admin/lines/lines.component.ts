import { Component, OnInit, Input } from '@angular/core';
import { GridOptions } from 'ag-grid/main';
import { GenericItem } from '../../models/genericItem';
import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit {  
  gridOptions: GridOptions;
  columnDefs: any[];
  filteredData: any[];
  selectedItem: GenericItem = new GenericItem();
  source: any = {};
  
  dataAdapter: any;
  columns: any[];

  constructor () {
    this.source = {
        localdata: this.getData(),
        // url: '../sampledata/products.xml' //Mae marquito aqui colocas la URL del api cuando uses services
        datatype: 'json',
        datafields: [
            { name: 'id', type: 'int' },
            { name: 'nombre', type: 'string' }
        ],
        id: 'id', 
    };
    this.dataAdapter = new jqx.dataAdapter(this.source);
    this.columns = [
        { text: 'ID', columngroup: 'id', datafield: 'id', width: '10%' },
        { text: 'Nombre', columngroup: 'nombre', datafield: 'nombre' }
    ];
  }
  
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
            'id': 23,
            'nombre': 'Ambientadores'
        },
        {
            'id': 19,
            'nombre': 'BANDERINES'
        },
        {
            'id': 1,
            'nombre': 'Calcomanías'
        },
        {
            'id': 14,
            'nombre': 'Calendario de Escritorio'
        },
        {
            'id': 16,
            'nombre': 'Calendarios de bolsillo.'
        },
        {
            'id': 12,
            'nombre': 'Cintillos'
        },
        {
            'id': 29,
            'nombre': 'Dangles'
        },
        {
            'id': 8,
            'nombre': 'Escuadra Isósceles'
        },
        {
            'id': 28,
            'nombre': 'Etiquetas'
        },
        {
            'id': 4,
            'nombre': 'EXHIBIDOR'
        },
        {
            'id': 26,
            'nombre': 'FICHAS'
        },
        {
            'id': 9,
            'nombre': 'Habladores'
        },
        {
            'id': 25,
            'nombre': 'IMPRESIONES'
        },
        {
            'id': 18,
            'nombre': 'Llaveros'
        },
        {
            'id': 17,
            'nombre': 'MAGNETICOS'
        },
        {
            'id': 5,
            'nombre': 'PLACAS'
        },
        {
            'id': 22,
            'nombre': 'Portabrochure'
        },
        {
            'id': 24,
            'nombre': 'PORTACUBOS'
        },
        {
            'id': 20,
            'nombre': 'PORTAMENUES'
        },
        {
            'id': 3,
            'nombre': 'PORTAPLATOS'
        },
        {
            'id': 2,
            'nombre': 'Posa vasos'
        },
        {
            'id': 7,
            'nombre': 'Reglas'
        },
        {
            'id': 6,
            'nombre': 'ROTULOS'
        },
        {
            'id': 15,
            'nombre': 'Separadores'
        },
        {
            'id': 21,
            'nombre': 'SERVILLETEROS'
        },
        {
            'id': 13,
            'nombre': 'Tarjetas'
        },
        {
            'id': 10,
            'nombre': 'Transportador'
        },
        {
            'id': 27,
            'nombre': 'Viceras'
        }
    ];
  }
}
