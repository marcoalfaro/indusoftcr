import { Component, OnInit } from '@angular/core';
import { Configuration } from '../../models/configuration';

@Component({
  selector: 'app-company-config',
  templateUrl: './company-config.component.html',
  styleUrls: ['./company-config.component.scss']
})
export class CompanyConfigComponent implements OnInit {
  selectedItem: Configuration = new Configuration();

  constructor() { }

  ngOnInit() {
    this.selectedItem = {
        'cedula': '9-999-9999',
        'direccion': 'San José. 150Norte del Estadio Nacional',
        'telefono': '12345678',
        'email': 'administracion@empresa1.com',
        'utilidad': 135,
        'impuestoventa': 13,
        'precioMolde': 900,
        'precioTinta': 0.02,
        'precioPositivo': 2.33,
        'precioArte': 1000,
        'precioSolvente': 900,
        'precioCorte': 1000,
        'precioVelocidad': 250,
        'precioHoraImpresion': 2140,        
        'id': 1,
        'activo': true
    };
  }
}
