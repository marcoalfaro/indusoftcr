import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid/main';
import { Material } from 'app/models/Material';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {
  gridOptions: GridOptions;
  columnDefs: any[];
  filteredData: any[];
  selectedItem: Material = new Material();
  
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
        'nombre': 'ACRILICO  TRANSPARENTE 4MM',
        'altura': 122,
        'base': 244,
        'codigoInventario': 'ACRT4MM',
        'costoInventario': 41144,
        'empresaId': 1,
        'id': 1,
        'activo': true
      },
      {
          'nombre': 'ACRILICO AMBAR 2.4MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'IS066',
          'costoInventario': 26821,
          'empresaId': 1,
          'id': 2,
          'activo': true
      },
      {
          'nombre': 'ACRILICO AMBAR 3MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACRAMB3MM',
          'costoInventario': 32099,
          'empresaId': 1,
          'id': 3,
          'activo': true
      },
      {
          'nombre': 'ACRILICO AMBAR 4MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACRAM4',
          'costoInventario': 44030,
          'empresaId': 1,
          'id': 4,
          'activo': true
      },
      {
          'nombre': 'ACRILICO AZUL 3MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACRAZ3',
          'costoInventario': 32100,
          'empresaId': 1,
          'id': 5,
          'activo': true
      },
      {
          'nombre': 'ACRILICO AZUL 4MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACRAZ4',
          'costoInventario': 44030,
          'empresaId': 1,
          'id': 6,
          'activo': true
      },
      {
          'nombre': 'ACRILICO BLANCO 2.4mm',
          'altura': 122,
          'base': 244,
          'codigoInventario': '40-10',
          'costoInventario': 26825,
          'empresaId': 1,
          'id': 7,
          'activo': true
      },
      {
          'nombre': 'ACRILICO BLANCO 3 MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACRI3W',
          'costoInventario': 32100,
          'empresaId': 1,
          'id': 8,
          'activo': true
      },
      {
          'nombre': 'ACRILICO BLANCO 4MM',
          'altura': 275,
          'base': 185,
          'codigoInventario': 'ACRB4MM',
          'costoInventario': 80000,
          'empresaId': 1,
          'id': 9,
          'activo': true
      },
      {
          'nombre': 'ACRILICO HUMO 2.4 MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': '19-071',
          'costoInventario': 26825,
          'empresaId': 1,
          'id': 10,
          'activo': true
      },
      {
          'nombre': 'ACRILICO HUMO 3MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACRHUMO',
          'costoInventario': 32100,
          'empresaId': 1,
          'id': 11,
          'activo': true
      },
      {
          'nombre': 'ACRILICO HUMO 4.8MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACRHU4',
          'costoInventario': 52821,
          'empresaId': 1,
          'id': 12,
          'activo': true
      },
      {
          'nombre': 'ACRILICO HUMO 5MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACRHUMO5MM',
          'costoInventario': 52821,
          'empresaId': 1,
          'id': 13,
          'activo': true
      },
      {
          'nombre': 'ACRILICO HUMO 6MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACRHUMO6MM',
          'costoInventario': 66034,
          'empresaId': 1,
          'id': 14,
          'activo': true
      },
      {
          'nombre': 'ACRILICO HUMO DE 4MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACRHUMO4',
          'costoInventario': 44030,
          'empresaId': 1,
          'id': 15,
          'activo': true
      },
      {
          'nombre': 'ACRÌLICO NEGRO 2.4MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACRNEGR',
          'costoInventario': 26821,
          'empresaId': 1,
          'id': 16,
          'activo': true
      },
      {
          'nombre': 'ACRILICO NEGRO 3MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACRNE3',
          'costoInventario': 32100,
          'empresaId': 1,
          'id': 17,
          'activo': true
      },
      {
          'nombre': 'ACRILICO ROJO 3MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ISO-1',
          'costoInventario': 32100,
          'empresaId': 1,
          'id': 18,
          'activo': true
      },
      {
          'nombre': 'ACRILICO SOLIDO AMARILLO 2.4MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACRSA2.4',
          'costoInventario': 28000,
          'empresaId': 1,
          'id': 19,
          'activo': true
      },
      {
          'nombre': 'ACRILICO SOLIDO AMARILLO 3MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACRSA3',
          'costoInventario': 28000,
          'empresaId': 1,
          'id': 20,
          'activo': true
      },
      {
          'nombre': 'ACRILICO TRANSLUCIDO AMARILLO',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACTRASAM6',
          'costoInventario': 51590,
          'empresaId': 1,
          'id': 21,
          'activo': true
      },
      {
          'nombre': 'ACRILICO TRANSLUCIDO AZUL',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACTRASAZ4',
          'costoInventario': 51590,
          'empresaId': 1,
          'id': 22,
          'activo': true
      },
      {
          'nombre': 'ACRILICO TRANSP 1.5MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACRTRAN',
          'costoInventario': 20000,
          'empresaId': 1,
          'id': 23,
          'activo': true
      },
      {
          'nombre': 'ACRILICO TRANSP 4.8 MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': '10-00-4',
          'costoInventario': 52821,
          'empresaId': 1,
          'id': 24,
          'activo': true
      },
      {
          'nombre': 'ACRILICO TRANSPARENTE 1.5MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACRT1.5',
          'costoInventario': 20000,
          'empresaId': 1,
          'id': 25,
          'activo': true
      },
      {
          'nombre': 'ACRILICO TRANSPARENTE 2.4MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACRT2.4',
          'costoInventario': 25060,
          'empresaId': 1,
          'id': 26,
          'activo': true
      },
      {
          'nombre': 'ACRILICO TRANSPARENTE 2MM',
          'altura': 122,
          'base': 183,
          'codigoInventario': 'ACRT2MM',
          'costoInventario': 17295,
          'empresaId': 1,
          'id': 27,
          'activo': true
      },
      {
          'nombre': 'ACRILICO TRANSPARENTE 3MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACRT3',
          'costoInventario': 29996,
          'empresaId': 1,
          'id': 28,
          'activo': true
      },
      {
          'nombre': 'ACRILICO TRANSPARENTE 4.8MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACRT4.8',
          'costoInventario': 49366,
          'empresaId': 1,
          'id': 29,
          'activo': true
      },
      {
          'nombre': 'ACRILICO TRANSPARENTE 4MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACRITRANS4',
          'costoInventario': 41144,
          'empresaId': 1,
          'id': 30,
          'activo': true
      },
      {
          'nombre': 'ACRILICO TRANSPARENTE 5MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACRT5MM',
          'costoInventario': 49366,
          'empresaId': 1,
          'id': 31,
          'activo': true
      },
      {
          'nombre': 'ACRILICO TRANSPARENTE 6MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACRT6MM',
          'costoInventario': 61715,
          'empresaId': 1,
          'id': 32,
          'activo': true
      },
      {
          'nombre': 'ACRILICO TRANSPARENTE 8MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACRT8MM',
          'costoInventario': 82305,
          'empresaId': 1,
          'id': 33,
          'activo': true
      },
      {
          'nombre': 'ACRILICO TRANSPARENTE DE 12MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'ACRT12',
          'costoInventario': 123500,
          'empresaId': 1,
          'id': 34,
          'activo': true
      },
      {
          'nombre': 'FORMICA BLANCA',
          'altura': 122,
          'base': 183,
          'codigoInventario': 'FORMICA',
          'costoInventario': 4050,
          'empresaId': 1,
          'id': 35,
          'activo': true
      },
      {
          'nombre': 'GYPTRAN DE 3MM',
          'altura': 122,
          'base': 183,
          'codigoInventario': 'GYPTRAN3MM',
          'costoInventario': 1215,
          'empresaId': 1,
          'id': 36,
          'activo': true
      },
      {
          'nombre': 'hierro esmaltado',
          'altura': 180,
          'base': 90,
          'codigoInventario': 'HIERRO ESMALTADO',
          'costoInventario': 6835,
          'empresaId': 1,
          'id': 37,
          'activo': true
      },
      {
          'nombre': 'HIGH GLOSS',
          'altura': 50,
          'base': 70,
          'codigoInventario': 'PA-001',
          'costoInventario': 170,
          'empresaId': 1,
          'id': 38,
          'activo': true
      },
      {
          'nombre': 'LONA FLEX ANARANJADA',
          'altura': 100,
          'base': 135,
          'codigoInventario': 'LONA ANARANJADA',
          'costoInventario': 1250,
          'empresaId': 1,
          'id': 39,
          'activo': true
      },
      {
          'nombre': 'LONA FLEX AZUL REY',
          'altura': 100,
          'base': 135,
          'codigoInventario': 'LONA FLEX',
          'costoInventario': 1050,
          'empresaId': 1,
          'id': 40,
          'activo': true
      },
      {
          'nombre': 'LONA FLEX BLANCA',
          'altura': 100,
          'base': 135,
          'codigoInventario': 'LONA BLANCA',
          'costoInventario': 1497,
          'empresaId': 1,
          'id': 41,
          'activo': true
      },
      {
          'nombre': 'LONA VERANO',
          'altura': 100,
          'base': 135,
          'codigoInventario': 'LONA VERANO',
          'costoInventario': 1950,
          'empresaId': 1,
          'id': 42,
          'activo': true
      },
      {
          'nombre': 'LONAFLEX',
          'altura': 100,
          'base': 135,
          'codigoInventario': 'IS055',
          'costoInventario': 1229.46,
          'empresaId': 1,
          'id': 43,
          'activo': true
      },
      {
          'nombre': 'LONAFLEZ DE COLOR',
          'altura': 100,
          'base': 135,
          'codigoInventario': 'LONAFLEX',
          'costoInventario': 1200,
          'empresaId': 1,
          'id': 44,
          'activo': true
      },
      {
          'nombre': 'MAGNETICO 0.20',
          'altura': 100,
          'base': 61,
          'codigoInventario': 'MAGNETICO0.20PIZZA',
          'costoInventario': 3800,
          'empresaId': 1,
          'id': 45,
          'activo': true
      },
      {
          'nombre': 'P V C EXPANDIDO 6MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'PVC6MM',
          'costoInventario': 12000,
          'empresaId': 1,
          'id': 46,
          'activo': true
      },
      {
          'nombre': 'P V C EXPANDIDO AMARILLO 3MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'PVC3AMARILLO',
          'costoInventario': 16600,
          'empresaId': 1,
          'id': 47,
          'activo': true
      },
      {
          'nombre': 'P. V. C. EXPANDIDO',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'PVCEXP10MM',
          'costoInventario': 24000,
          'empresaId': 1,
          'id': 48,
          'activo': true
      },
      {
          'nombre': 'P. V. C. EXPANDIDO 3MM AZUL',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'PVCEXP3MMAMARILLO',
          'costoInventario': 11800,
          'empresaId': 1,
          'id': 49,
          'activo': true
      },
      {
          'nombre': 'P. V. C. EXPANDIDO 3MM ROJO',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'PVCEXP3MMROJO',
          'costoInventario': 13482.48,
          'empresaId': 1,
          'id': 50,
          'activo': true
      },
      {
          'nombre': 'P. V. C. EXPANDIDO 4MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'PVCEXP4MM',
          'costoInventario': 14537.06,
          'empresaId': 1,
          'id': 51,
          'activo': true
      },
      {
          'nombre': 'P. V. C. EXPANDIDO BLANCO',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'PVCEXP3MMBLANCO',
          'costoInventario': 11800,
          'empresaId': 1,
          'id': 52,
          'activo': true
      },
      {
          'nombre': 'P. V. C. EXPANDIDO VERDE',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'PVCEXP3MMVERDE',
          'costoInventario': 14573.03,
          'empresaId': 1,
          'id': 53,
          'activo': true
      },
      {
          'nombre': 'PAPEL RADIANTE AMARILLO',
          'altura': 50,
          'base': 70,
          'codigoInventario': 'RADIANTAMAR',
          'costoInventario': 305,
          'empresaId': 1,
          'id': 54,
          'activo': true
      },
      {
          'nombre': 'PAPEL RADIANTE ANARANJADO',
          'altura': 50,
          'base': 70,
          'codigoInventario': 'PA0081',
          'costoInventario': 305,
          'empresaId': 1,
          'id': 55,
          'activo': true
      },
      {
          'nombre': 'PAPEL RADIANTE ROJO',
          'altura': 50,
          'base': 70,
          'codigoInventario': 'PA-0061',
          'costoInventario': 305,
          'empresaId': 1,
          'id': 56,
          'activo': true
      },
      {
          'nombre': 'PAPEL RADIANTE VERDE',
          'altura': 50,
          'base': 70,
          'codigoInventario': 'PA-0071',
          'costoInventario': 305,
          'empresaId': 1,
          'id': 57,
          'activo': true
      },
      {
          'nombre': 'PELON',
          'altura': 100,
          'base': 100,
          'codigoInventario': '229',
          'costoInventario': 400,
          'empresaId': 1,
          'id': 58,
          'activo': true
      },
      {
          'nombre': 'POLICARBONATO',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'POLICARBONATO',
          'costoInventario': 29000,
          'empresaId': 1,
          'id': 59,
          'activo': true
      },
      {
          'nombre': 'POLICARBONATO 2.4',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'POLICAR2.4MM',
          'costoInventario': 0,
          'empresaId': 1,
          'id': 60,
          'activo': true
      },
      {
          'nombre': 'POLICARBONATO transparente 3 MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'POLICAR3MM',
          'costoInventario': 63380,
          'empresaId': 1,
          'id': 61,
          'activo': true
      },
      {
          'nombre': 'POLICARBONATO DELGADO',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'POLIDELGADO',
          'costoInventario': 2035,
          'empresaId': 1,
          'id': 62,
          'activo': true
      },
      {
          'nombre': 'POLIESTER ORO',
          'altura': 50.8,
          'base': 68.5,
          'codigoInventario': 'FB-0071',
          'costoInventario': 1142.7,
          'empresaId': 1,
          'id': 63,
          'activo': true
      },
      {
          'nombre': 'POLIESTER PLATA',
          'altura': 50,
          'base': 68,
          'codigoInventario': 'FB-0065',
          'costoInventario': 1155,
          'empresaId': 1,
          'id': 64,
          'activo': true
      },
      {
          'nombre': 'POLIESTIRENO #20',
          'altura': 180,
          'base': 120,
          'codigoInventario': 'PAEX6600S-20',
          'costoInventario': 2100,
          'empresaId': 1,
          'id': 65,
          'activo': true
      },
      {
          'nombre': 'POLIESTIRENO #30',
          'altura': 180,
          'base': 120,
          'codigoInventario': 'PAEX6600S-30',
          'costoInventario': 3095,
          'empresaId': 1,
          'id': 66,
          'activo': true
      },
      {
          'nombre': 'POLIESTIRENO #40',
          'altura': 183,
          'base': 75,
          'codigoInventario': 'PAEX6600S-40H',
          'costoInventario': 2500,
          'empresaId': 1,
          'id': 67,
          'activo': true
      },
      {
          'nombre': 'Poliestireno #50 transparente',
          'altura': 244,
          'base': 122,
          'codigoInventario': 'PAEX6600T-40',
          'costoInventario': 15739,
          'empresaId': 1,
          'id': 68,
          'activo': true
      },
      {
          'nombre': 'POLIESTIRENO #50',
          'altura': 180,
          'base': 120,
          'codigoInventario': 'PAEX6600S-50',
          'costoInventario': 5200,
          'empresaId': 1,
          'id': 69,
          'activo': true
      },
      {
          'nombre': 'POLIESTIRENO #80',
          'altura': 180,
          'base': 120,
          'codigoInventario': 'PAEX6600S-70',
          'costoInventario': 8200,
          'empresaId': 1,
          'id': 70,
          'activo': true
      },
      {
          'nombre': 'POLIESTIRENO 100',
          'altura': 180,
          'base': 120,
          'codigoInventario': 'PAEX6600S-100',
          'costoInventario': 10500,
          'empresaId': 1,
          'id': 71,
          'activo': true
      },
      {
          'nombre': 'POLIESTIRENO TRANSPARENTE # 30',
          'altura': 180,
          'base': 120,
          'codigoInventario': 'MERLAMI00076P',
          'costoInventario': 12004,
          'empresaId': 1,
          'id': 72,
          'activo': true
      },
      {
          'nombre': 'POLIFLEX AMARILLO 410',
          'altura': 20,
          'base': 100,
          'codigoInventario': 'POLI-YW410',
          'costoInventario': 4218.76,
          'empresaId': 1,
          'id': 73,
          'activo': true
      },
      {
          'nombre': 'POLIFLEX BLANCO 401',
          'altura': 20,
          'base': 100,
          'codigoInventario': 'POLI-WT401',
          'costoInventario': 4764,
          'empresaId': 1,
          'id': 74,
          'activo': true
      },
      {
          'nombre': 'POLIFLEX NEGRO 402',
          'altura': 20,
          'base': 100,
          'codigoInventario': 'POLI-BK402',
          'costoInventario': 4671,
          'empresaId': 1,
          'id': 75,
          'activo': true
      },
      {
          'nombre': 'POLIFLEX ROJO 408',
          'altura': 20,
          'base': 100,
          'codigoInventario': 'POLI-RD408',
          'costoInventario': 4764,
          'empresaId': 1,
          'id': 76,
          'activo': true
      },
      {
          'nombre': 'POLIFLEX ROYAL BLUE 406',
          'altura': 20,
          'base': 100,
          'codigoInventario': 'POLI-RB406',
          'costoInventario': 4218.76,
          'empresaId': 1,
          'id': 77,
          'activo': true
      },
      {
          'nombre': 'POLIPROPILENO 20',
          'altura': 110,
          'base': 65,
          'codigoInventario': 'PP-0001',
          'costoInventario': 900,
          'empresaId': 1,
          'id': 79,
          'activo': true
      },
      {
          'nombre': 'POLIPROPILENO 30 AMARILLO',
          'altura': 65,
          'base': 110,
          'codigoInventario': 'PP-0051',
          'costoInventario': 900,
          'empresaId': 1,
          'id': 80,
          'activo': true
      },
      {
          'nombre': 'POLIPROPILENO 40 AZUL',
          'altura': 65,
          'base': 110,
          'codigoInventario': 'PP-0101',
          'costoInventario': 1935,
          'empresaId': 1,
          'id': 81,
          'activo': true
      },
      {
          'nombre': 'POLIPROPILENO 40 ROJO',
          'altura': 110,
          'base': 65,
          'codigoInventario': 'PP-0058',
          'costoInventario': 1955,
          'empresaId': 1,
          'id': 82,
          'activo': true
      },
      {
          'nombre': 'POLIPROPILENO 50 BLANCO',
          'altura': 65,
          'base': 110,
          'codigoInventario': 'UNPP-0101',
          'costoInventario': 1955,
          'empresaId': 1,
          'id': 83,
          'activo': true
      },
      {
          'nombre': 'POLIPROPILENO 70',
          'altura': 65,
          'base': 110,
          'codigoInventario': 'PP00132',
          'costoInventario': 2250,
          'empresaId': 1,
          'id': 84,
          'activo': true
      },
      {
          'nombre': 'POLIPROPILENO AMARILLO 0.20',
          'altura': 65,
          'base': 110,
          'codigoInventario': 'UNPP-0010 AMARILLO',
          'costoInventario': 389,
          'empresaId': 1,
          'id': 85,
          'activo': true
      },
      {
          'nombre': 'POLIPROPILENO CRISTAL',
          'altura': 65,
          'base': 110,
          'codigoInventario': 'UNPP-0141',
          'costoInventario': 1795,
          'empresaId': 1,
          'id': 86,
          'activo': true
      },
      {
          'nombre': 'POLIPROPILENO CRISTAL DE 1MM',
          'altura': 65,
          'base': 110,
          'codigoInventario': 'UPNN-0141 CRISTAL',
          'costoInventario': 4000,
          'empresaId': 1,
          'id': 87,
          'activo': true
      },
      {
          'nombre': 'polipropileno negro',
          'altura': 65,
          'base': 110,
          'codigoInventario': 'PP-NEGRO 50',
          'costoInventario': 2000,
          'empresaId': 1,
          'id': 88,
          'activo': true
      },
      {
          'nombre': 'POLIPROPILENO NEGRO 0.04 (#30)',
          'altura': 65,
          'base': 110,
          'codigoInventario': 'POLIPRONEGRO',
          'costoInventario': 900,
          'empresaId': 1,
          'id': 89,
          'activo': true
      },
      {
          'nombre': 'POLIPROPILENO NEGRO 0.8MM CALIBRE 50',
          'altura': 65,
          'base': 110,
          'codigoInventario': 'UNPP-0052 NEGRO',
          'costoInventario': 126894,
          'empresaId': 1,
          'id': 90,
          'activo': true
      },
      {
          'nombre': 'POLIPROPILENO VERDE OSCURO 0.20',
          'altura': 65,
          'base': 110,
          'codigoInventario': 'UNPP-0007 VERDE OSCU',
          'costoInventario': 1955,
          'empresaId': 1,
          'id': 91,
          'activo': true
      },
      {
          'nombre': 'PVC EXPANDIDO 10MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'PVC10MM',
          'costoInventario': 24000,
          'empresaId': 1,
          'id': 92,
          'activo': true
      },
      {
          'nombre': 'PVC EXPANDIDO 1MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'PVC1MM',
          'costoInventario': 4964.69,
          'empresaId': 1,
          'id': 93,
          'activo': true
      },
      {
          'nombre': 'PVC EXPANDIDO 2MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'PVC2MM',
          'costoInventario': 7200,
          'empresaId': 1,
          'id': 94,
          'activo': true
      },
      {
          'nombre': 'PVC EXPANDIDO 3 MM VERDE',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'PVC3V',
          'costoInventario': 14500,
          'empresaId': 1,
          'id': 95,
          'activo': true
      },
      {
          'nombre': 'PVC EXPANDIDO 3MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'PVC 3 MM',
          'costoInventario': 10445,
          'empresaId': 1,
          'id': 96,
          'activo': true
      },
      {
          'nombre': 'PVC EXPANDIDO 4MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'PVC4MM',
          'costoInventario': 10628,
          'empresaId': 1,
          'id': 97,
          'activo': true
      },
      {
          'nombre': 'PVC EXPANDIDO 5MM',
          'altura': 122,
          'base': 244,
          'codigoInventario': 'PVC5MM',
          'costoInventario': 19250,
          'empresaId': 1,
          'id': 98,
          'activo': true
      },
      {
          'nombre': 'SAFETY',
          'altura': 50,
          'base': 68,
          'codigoInventario': 'IS054',
          'costoInventario': 9300,
          'empresaId': 1,
          'id': 99,
          'activo': true
      },
      {
          'nombre': 'SATIN TELA ADHESIVO',
          'altura': 43,
          'base': 55,
          'codigoInventario': 'SATIN TELA',
          'costoInventario': 336,
          'empresaId': 1,
          'id': 100,
          'activo': true
      },
      {
          'nombre': 'TRANSFER RITE',
          'altura': 60.96,
          'base': 100,
          'codigoInventario': 'ATI2109',
          'costoInventario': 27672.06,
          'empresaId': 1,
          'id': 101,
          'activo': true
      },
      {
          'nombre': 'VINIL AMARILLO',
          'altura': 70,
          'base': 100,
          'codigoInventario': 'C00515',
          'costoInventario': 1480,
          'empresaId': 1,
          'id': 102,
          'activo': true
      },
      {
          'nombre': 'VINIL ANARANJADO ROLLO',
          'altura': 60,
          'base': 100,
          'codigoInventario': '61-ORANGE',
          'costoInventario': 1480,
          'empresaId': 1,
          'id': 103,
          'activo': true
      },
      {
          'nombre': 'VINIL AZUL ROLLO',
          'altura': 60,
          'base': 100,
          'codigoInventario': '60-SAPHIRE BLUE',
          'costoInventario': 1480,
          'empresaId': 1,
          'id': 104,
          'activo': true
      },
      {
          'nombre': 'VINIL BLANCO EN ROLLO',
          'altura': 60,
          'base': 100,
          'codigoInventario': 'VINBLAROLLO',
          'costoInventario': 1480,
          'empresaId': 1,
          'id': 105,
          'activo': true
      },
      {
          'nombre': 'VINIL BLANCO LAMINA CON CORTE',
          'altura': 70,
          'base': 100,
          'codigoInventario': 'PA-0031',
          'costoInventario': 665,
          'empresaId': 1,
          'id': 106,
          'activo': true
      },
      {
          'nombre': 'VINIL BLANCO SIN CORTE',
          'altura': 70,
          'base': 100,
          'codigoInventario': 'PA-0031SC',
          'costoInventario': 665,
          'empresaId': 1,
          'id': 107,
          'activo': true
      },
      {
          'nombre': 'VINIL CHAROL AMARILLO',
          'altura': 135,
          'base': 100,
          'codigoInventario': 'IS083',
          'costoInventario': 950,
          'empresaId': 1,
          'id': 108,
          'activo': true
      },
      {
          'nombre': 'VINIL CHAROL AZUL',
          'altura': 135,
          'base': 100,
          'codigoInventario': 'IS081',
          'costoInventario': 950,
          'empresaId': 1,
          'id': 109,
          'activo': true
      },
      {
          'nombre': 'VINIL CHAROL BLANCO',
          'altura': 135,
          'base': 100,
          'codigoInventario': 'IS0082',
          'costoInventario': 950,
          'empresaId': 1,
          'id': 110,
          'activo': true
      },
      {
          'nombre': 'VINIL ESTATICO',
          'altura': 127,
          'base': 63,
          'codigoInventario': '2739CL',
          'costoInventario': 1835,
          'empresaId': 1,
          'id': 111,
          'activo': true
      },
      {
          'nombre': 'VINIL FOIL ORO',
          'altura': 50,
          'base': 70,
          'codigoInventario': '481',
          'costoInventario': 500,
          'empresaId': 1,
          'id': 112,
          'activo': true
      },
      {
          'nombre': 'VINIL FOIL PLATA',
          'altura': 50,
          'base': 70,
          'codigoInventario': '482',
          'costoInventario': 500,
          'empresaId': 1,
          'id': 113,
          'activo': true
      },
      {
          'nombre': 'VINIL MAGNETICO 0.015',
          'altura': 61,
          'base': 100,
          'codigoInventario': 'IS052',
          'costoInventario': 2575,
          'empresaId': 1,
          'id': 114,
          'activo': true
      },
      {
          'nombre': 'VINIL MAGNETICO 0.020',
          'altura': 61,
          'base': 100,
          'codigoInventario': 'IS051',
          'costoInventario': 3800,
          'empresaId': 1,
          'id': 115,
          'activo': true
      },
      {
          'nombre': 'VINIL MAGNETICO 0.030',
          'altura': 60,
          'base': 100,
          'codigoInventario': 'IS053',
          'costoInventario': 7742,
          'empresaId': 1,
          'id': 116,
          'activo': true
      },
      {
          'nombre': 'VINIL NEGRO',
          'altura': 60,
          'base': 100,
          'codigoInventario': 'C00514',
          'costoInventario': 1480,
          'empresaId': 1,
          'id': 117,
          'activo': true
      },
      {
          'nombre': 'VINIL NEGRO EN ROLLOS',
          'altura': 60,
          'base': 100,
          'codigoInventario': 'NV19-24',
          'costoInventario': 1480,
          'empresaId': 1,
          'id': 118,
          'activo': true
      },
      {
          'nombre': 'VINIL PLOTTER TRASPARENTE MATE',
          'altura': 60,
          'base': 100,
          'codigoInventario': 'NV24-120',
          'costoInventario': 1881.3,
          'empresaId': 1,
          'id': 119,
          'activo': true
      },
      {
          'nombre': 'VINIL RADIANTE AMARILLO LIMON',
          'altura': 50,
          'base': 70,
          'codigoInventario': 'PA-0072',
          'costoInventario': 271.2,
          'empresaId': 1,
          'id': 120,
          'activo': true
      },
      {
          'nombre': 'VINIL REFLECTIVO AMARILLO IMPORTADO',
          'altura': 61,
          'base': 100,
          'codigoInventario': 'REFLECAMARILLO',
          'costoInventario': 6565,
          'empresaId': 1,
          'id': 121,
          'activo': true
      },
      {
          'nombre': 'VINIL REFLECTIVO AZUL',
          'altura': 61,
          'base': 100,
          'codigoInventario': 'VINREFAZUL',
          'costoInventario': 6565,
          'empresaId': 1,
          'id': 122,
          'activo': true
      },
      {
          'nombre': 'VINIL REFLECTIVO AZUL IMPORTADO',
          'altura': 61,
          'base': 100,
          'codigoInventario': 'REFLAZUL',
          'costoInventario': 6565,
          'empresaId': 1,
          'id': 123,
          'activo': true
      },
      {
          'nombre': 'VINIL REFLECTIVO BLANCO IMPORTADO',
          'altura': 61,
          'base': 100,
          'codigoInventario': 'VIREFBLA',
          'costoInventario': 6565,
          'empresaId': 1,
          'id': 124,
          'activo': true
      },
      {
          'nombre': 'VINIL REFLECTIVO NARANJA IMPORTADO',
          'altura': 61,
          'base': 100,
          'codigoInventario': 'REFLNARANJA',
          'costoInventario': 6565,
          'empresaId': 1,
          'id': 125,
          'activo': true
      },
      {
          'nombre': 'VINIL REFLECTIVO NEGRO IMP',
          'altura': 61,
          'base': 100,
          'codigoInventario': 'VINREFNEGRO',
          'costoInventario': 6565,
          'empresaId': 1,
          'id': 126,
          'activo': true
      },
      {
          'nombre': 'VINIL REFLECTIVO ROJO IMPORTADO',
          'altura': 61,
          'base': 100,
          'codigoInventario': 'VINRELROJ',
          'costoInventario': 6565,
          'empresaId': 1,
          'id': 127,
          'activo': true
      },
      {
          'nombre': 'VINIL ROJO ROLLO',
          'altura': 60,
          'base': 100,
          'codigoInventario': '70 RED',
          'costoInventario': 1480,
          'empresaId': 1,
          'id': 128,
          'activo': true
      },
      {
          'nombre': 'VINIL SAFE GLO FOTOLUMINICENTE',
          'altura': 60,
          'base': 100,
          'codigoInventario': 'RODY-SGLO',
          'costoInventario': 11540,
          'empresaId': 1,
          'id': 129,
          'activo': true
      },
      {
          'nombre': 'VINIL SATIN PERMANENTE',
          'altura': 50,
          'base': 70,
          'codigoInventario': '341',
          'costoInventario': 242,
          'empresaId': 1,
          'id': 130,
          'activo': true
      },
      {
          'nombre': 'VINIL SATIN REMOVIBLE',
          'altura': 50,
          'base': 70,
          'codigoInventario': '372',
          'costoInventario': 370,
          'empresaId': 1,
          'id': 131,
          'activo': true
      },
      {
          'nombre': 'VINIL TRANPARENTE CON CORTE',
          'altura': 70,
          'base': 100,
          'codigoInventario': 'PA0041',
          'costoInventario': 665,
          'empresaId': 1,
          'id': 132,
          'activo': true
      },
      {
          'nombre': 'VINIL TRANSPARENTE SIN CORTE',
          'altura': 70,
          'base': 100,
          'codigoInventario': 'PA-0041SC',
          'costoInventario': 665,
          'empresaId': 1,
          'id': 133,
          'activo': true
      },
      {
          'nombre': 'VINIL VERDE REFLECTIVO ROLLO',
          'altura': 61,
          'base': 100,
          'codigoInventario': 'FDR3107',
          'costoInventario': 4540,
          'empresaId': 1,
          'id': 134,
          'activo': true
      },
      {
          'nombre': 'VINIL VERDE ROLLO',
          'altura': 60,
          'base': 100,
          'codigoInventario': '98GREEN',
          'costoInventario': 1496,
          'empresaId': 1,
          'id': 135,
          'activo': true
      },
      {
          'nombre': 'VINILO PLOTTER AMARILLO',
          'altura': 61,
          'base': 100,
          'codigoInventario': 'NV24-51',
          'costoInventario': 1500,
          'empresaId': 1,
          'id': 136,
          'activo': true
      },
      {
          'nombre': 'VINILO PLOTTER CHROME',
          'altura': 61,
          'base': 100,
          'codigoInventario': 'NV24-00',
          'costoInventario': 1881.3,
          'empresaId': 1,
          'id': 137,
          'activo': true
      },
      {
          'nombre': 'VINILO PLOTTER LD',
          'altura': 61,
          'base': 100,
          'codigoInventario': 'NV24-31',
          'costoInventario': 1881.3,
          'empresaId': 1,
          'id': 138,
          'activo': true
      },
      {
          'nombre': 'VINILO PLOTTER GRIS',
          'altura': 61,
          'base': 100,
          'codigoInventario': 'NV24-15',
          'costoInventario': 1881.3,
          'empresaId': 1,
          'id': 139,
          'activo': true
      },
      {
          'nombre': 'VINILO PLOTTER KELLY GREEN',
          'altura': 61,
          'base': 100,
          'codigoInventario': 'NV24-119',
          'costoInventario': 1500,
          'empresaId': 1,
          'id': 140,
          'activo': true
      },
      {
          'nombre': 'VINILO PLOTTER NARANJA 752',
          'altura': 61,
          'base': 100,
          'codigoInventario': 'NV24-61',
          'costoInventario': 1495,
          'empresaId': 1,
          'id': 141,
          'activo': true
      },
      {
          'nombre': 'VINILO PLOTTER OLIMPIC BLUE',
          'altura': 61,
          'base': 100,
          'codigoInventario': 'NV24-81',
          'costoInventario': 1500,
          'empresaId': 1,
          'id': 142,
          'activo': true
      },
      {
          'nombre': 'VINILO PLOTTER ROJO TOMATO',
          'altura': 61,
          'base': 100,
          'codigoInventario': 'NV24-71',
          'costoInventario': 1500,
          'empresaId': 1,
          'id': 143,
          'activo': true
      },
      {
          'nombre': 'VINILO PLOTTER SAPHIRE BLUE',
          'altura': 61,
          'base': 100,
          'codigoInventario': 'NV24-60',
          'costoInventario': 1500,
          'empresaId': 1,
          'id': 144,
          'activo': true
      },
      {
          'nombre': 'VINILO PLOTTER SYLVER',
          'altura': 61,
          'base': 100,
          'codigoInventario': 'NV24-14',
          'costoInventario': 1881.3,
          'empresaId': 1,
          'id': 145,
          'activo': true
      },
      {
          'nombre': 'VINILO PLOTTER VERDE',
          'altura': 61,
          'base': 100,
          'codigoInventario': 'NV24-98',
          'costoInventario': 1500,
          'empresaId': 1,
          'id': 146,
          'activo': true
      },
      {
          'nombre': 'VINILO PLOTTER VIVID BLUE',
          'altura': 61,
          'base': 100,
          'codigoInventario': 'NV24-85',
          'costoInventario': 1500,
          'empresaId': 1,
          'id': 147,
          'activo': true
      },
      {
          'nombre': 'YUPO',
          'altura': 64,
          'base': 97,
          'codigoInventario': 'YUPO #70',
          'costoInventario': 80,
          'empresaId': 1,
          'id': 148,
          'activo': true
      },
      {
          'nombre': 'CARTON ABSORVENTE BEERMANT BOARD',
          'altura': 100,
          'base': 70,
          'codigoInventario': 'BASIS 120',
          'costoInventario': 400,
          'empresaId': 1,
          'id': 149,
          'activo': true
      },
      {
          'nombre': 'VINIL TRANSPARENTE SIN CORTE',
          'altura': 100,
          'base': 70,
          'codigoInventario': 'PA-0041SC',
          'costoInventario': 665,
          'empresaId': 1,
          'id': 150,
          'activo': true
      },
      {
          'nombre': 'LATEX BLANCO',
          'altura': 24,
          'base': 28.5,
          'codigoInventario': 'IS061',
          'costoInventario': 930,
          'empresaId': 1,
          'id': 151,
          'activo': true
      },
      {
          'nombre': 'POLIESTIRENO H50',
          'altura': 180,
          'base': 120,
          'codigoInventario': 'PAEX6600H-50',
          'costoInventario': 5300,
          'empresaId': 1,
          'id': 152,
          'activo': true
      },
      {
          'nombre': 'POLIESTIRENO H20',
          'altura': 180,
          'base': 120,
          'codigoInventario': 'PAEX6600H-20',
          'costoInventario': 2200,
          'empresaId': 1,
          'id': 153,
          'activo': true
      },
      {
          'nombre': 'POLIESTIRENO H30',
          'altura': 180,
          'base': 120,
          'codigoInventario': 'PAEX6600H-30',
          'costoInventario': 3200,
          'empresaId': 1,
          'id': 154,
          'activo': true
      },
      {
          'nombre': 'POLIESTIRENO H80',
          'altura': 180,
          'base': 120,
          'codigoInventario': 'PAEX6600H-70',
          'costoInventario': 8500,
          'empresaId': 1,
          'id': 155,
          'activo': true
      },
      {
          'nombre': 'POLIESTIRENO H100',
          'altura': 180,
          'base': 120,
          'codigoInventario': 'PAEX6600H-100',
          'costoInventario': 11000,
          'empresaId': 1,
          'id': 156,
          'activo': true
      },
      {
          'nombre': 'COROPLAST 4MM',
          'altura': 244,
          'base': 122,
          'codigoInventario': 'CORO4MM',
          'costoInventario': 6420,
          'empresaId': 1,
          'id': 157,
          'activo': true
      },
      {
          'nombre': 'Cartulina C-12',
          'altura': 60,
          'base': 91,
          'codigoInventario': 'C-12',
          'costoInventario': 179,
          'empresaId': 1,
          'id': 158,
          'activo': true
      },
      {
          'nombre': 'VINIL BLANCO BAJA ADHERENCIA',
          'altura': 100,
          'base': 70,
          'codigoInventario': 'LC90/MPAT',
          'costoInventario': 583,
          'empresaId': 1,
          'id': 159,
          'activo': true
      },
      {
          'nombre': 'Cartulina C-14',
          'altura': 60,
          'base': 91,
          'codigoInventario': 'C-14',
          'costoInventario': 205,
          'empresaId': 1,
          'id': 160,
          'activo': true
      },
      {
          'nombre': 'Papel acuoso para calcomanía',
          'altura': 60,
          'base': 45,
          'codigoInventario': 'PA-0073',
          'costoInventario': 2673,
          'empresaId': 1,
          'id': 161,
          'activo': true
      },
      {
          'nombre': 'VINIL OLEOGRAFICO',
          'altura': 100,
          'base': 60,
          'codigoInventario': '149',
          'costoInventario': 2554,
          'empresaId': 1,
          'id': 162,
          'activo': true
      },
      {
          'nombre': 'POLYPROLINE (YUPO)',
          'altura': 100,
          'base': 90,
          'codigoInventario': '160',
          'costoInventario': 2100,
          'empresaId': 1,
          'id': 163,
          'activo': true
      },
      {
          'nombre': 'ACRILICO NARANJA 3MM',
          'altura': 244,
          'base': 122,
          'codigoInventario': 'ACRNAR 3MM',
          'costoInventario': 29705,
          'empresaId': 1,
          'id': 164,
          'activo': true
      },
      {
          'nombre': 'VINIL ESMERILADO (SANBLASTING)',
          'altura': 100,
          'base': 120,
          'codigoInventario': '3M120',
          'costoInventario': 7006,
          'empresaId': 1,
          'id': 165,
          'activo': true
      },
      {
          'nombre': 'polipropileno transparente 30',
          'altura': 65,
          'base': 110,
          'codigoInventario': 'PP-0141 CRISTAL',
          'costoInventario': 4000,
          'empresaId': 1,
          'id': 166,
          'activo': true
      },
      {
          'nombre': 'ACRILICO LECHOSO 4MM',
          'altura': 244,
          'base': 122,
          'codigoInventario': 'ACRL4MM',
          'costoInventario': 42770,
          'empresaId': 1,
          'id': 167,
          'activo': true
      },
      {
          'nombre': 'ACETATO TRANSPARENTE..',
          'altura': 56,
          'base': 132,
          'codigoInventario': 'ACETATOT',
          'costoInventario': 10500,
          'empresaId': 1,
          'id': 168,
          'activo': true
      },
      {
          'nombre': 'Pelicula Espejo o Bronce',
          'altura': 100,
          'base': 152,
          'codigoInventario': 'POLARIZADO',
          'costoInventario': 10735,
          'empresaId': 1,
          'id': 169,
          'activo': true
      },
      {
          'nombre': 'Papel Couche #100',
          'altura': 100,
          'base': 61,
          'codigoInventario': 'COUCHE 100',
          'costoInventario': 100,
          'empresaId': 1,
          'id': 170,
          'activo': true
      },
      {
          'nombre': 'ACRILICO BLANCO LECHOSO4mm',
          'altura': 244,
          'base': 122,
          'codigoInventario': 'ACRBLALECH4',
          'costoInventario': 45000,
          'empresaId': 1,
          'id': 171,
          'activo': true
      },
      {
          'nombre': 'Chinaflex',
          'altura': 100,
          'base': 160,
          'codigoInventario': 'CHINAFLEX',
          'costoInventario': 1600,
          'empresaId': 1,
          'id': 172,
          'activo': true
      },
      {
          'nombre': 'Poliestireno transparente #20',
          'altura': 180,
          'base': 120,
          'codigoInventario': 'POLTRANSP20',
          'costoInventario': 5000,
          'empresaId': 1,
          'id': 173,
          'activo': true
      },
      {
          'nombre': 'ESTATICO BLANCO',
          'altura': 100,
          'base': 70,
          'codigoInventario': '2740CL',
          'costoInventario': 1110,
          'empresaId': 1,
          'id': 174,
          'activo': true
      },
      {
          'nombre': 'VINIL ESTATICO BLANCO',
          'altura': 100,
          'base': 70,
          'codigoInventario': '2739BL',
          'costoInventario': 1158,
          'empresaId': 1,
          'id': 175,
          'activo': true
      },
      {
          'nombre': 'ACRILICO AZUL 2.4 MM',
          'altura': 244,
          'base': 122,
          'codigoInventario': 'ACRAZ2.4',
          'costoInventario': 27675,
          'empresaId': 1,
          'id': 176,
          'activo': true
      },
      {
          'nombre': 'VINIL ESTATICO CLEAR',
          'altura': 100,
          'base': 70,
          'codigoInventario': '2739DIGI',
          'costoInventario': 1125,
          'empresaId': 1,
          'id': 177,
          'activo': true
      },
      {
          'nombre': 'Fibrolit 5mm 61 x 61',
          'altura': 61,
          'base': 61,
          'codigoInventario': 'FIBROLIT 61',
          'costoInventario': 470,
          'empresaId': 1,
          'id': 178,
          'activo': true
      },
      {
          'nombre': 'FIBROLIT 5 MM 122 x 61',
          'altura': 61,
          'base': 122,
          'codigoInventario': 'FIBROLIT 122',
          'costoInventario': 1595,
          'empresaId': 1,
          'id': 179,
          'activo': true
      },
      {
          'nombre': 'ADHESIVO REMOVIBLE',
          'altura': 100,
          'base': 137,
          'codigoInventario': 'IJ20',
          'costoInventario': 2650,
          'empresaId': 1,
          'id': 180,
          'activo': true
      },
      {
          'nombre': 'CARTON PRESENTACION',
          'altura': 100,
          'base': 70,
          'codigoInventario': 'CARTON PRESENTACION',
          'costoInventario': 1800,
          'empresaId': 1,
          'id': 181,
          'activo': true
      }
    ];
  }

}
