import { Component, ViewChild, AfterViewInit, OnInit, Input, ViewContainerRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { LinesService } from '../common/services/lines.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ConfirmComponent } from '../common/confirm.component';
import { GenericItem } from '../models/genericItem';
import { Customer } from '../models/customer';
import { Material } from '../models/material';
import { Seller } from '../models/seller';
import { Quote } from '../models/quote';
import { DialogService } from 'ng2-bootstrap-modal';
import { CustomersService } from '../common/services/customers.service';
import { SellersService } from '../common/services/sellers.service';
import { MaterialsService } from '../common/services/materials.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
  providers: [LinesService, CustomersService, SellersService, MaterialsService]
})
export class QuotesComponent implements OnInit {
  dialogService: DialogService;
  linesService: LinesService;
  customersService: CustomersService;  
  sellersService: SellersService;
  materialsService: MaterialsService;
  lines: GenericItem[];
  customers: Customer[];
  sellers: Seller[];
  materials: Material[];  
  model: Quote = new Quote();

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef, dialogService: DialogService
              ,linesService: LinesService
              ,customersService: CustomersService
              ,sellersService: SellersService
              ,materialsService: MaterialsService) {
    this.toastr.setRootViewContainerRef(vcr);
    this.dialogService = dialogService;
    this.linesService = linesService;
    this.customersService = customersService;
    this.sellersService = sellersService;
    this.materialsService = materialsService;
    this.loadDropdowns();
  }

  ngOnInit() {
    this.subscribeDropdownsData();
    this.model = this.getSampleQuote();
  }

  getSampleQuote(){
    let sample = new Quote();
    sample.cliente =  { id: 25, nombre: "CONTRA PUNTO"};
    sample.vendedor = { id: 3, nombre: "Rafael Zamora"};
    sample.material = { id: 65, nombre: "POLIESTIRENO #20"};
    sample.linea = { id: 1, nombre: "Calcomanías"};
    sample.fecha = new Date("2006-08-24T17:00:10.267");
    sample.precioUnitario = 0;
    sample.subtotal = 42600.84;
    sample.porcentaje = 0;
    sample.totalUsd = 185.52;
    sample.totalCol = 95851.89;
    sample.cantidad = 240;
    sample.montaje = 2;
    sample.base = 6;
    sample.altura = 45.5;
    sample.tintas = 6;
    sample.cubrimiento = 100;
    sample.troquel = 0;
    sample.doblez = 0;
    sample.cuatricromia = 3000;
    sample.otro = 0;
    sample.porcEvento = null;
    sample.aplicada = false;
    sample.fecAplicada = null;
    sample.fecRegistro = new Date("2006-08-24T17:02:04.263");
    sample.numPedido = null;
    sample.precioMaterial = 10396;
    sample.precioTintas = 1506.96;
    sample.precioArte = 6000;
    sample.precioImpresion = 2764.8;
    sample.precioMolde = 5400;
    sample.precioCorte = 500;
    sample.precioPositivo = 7633.08;
    sample.precioSolvente = 5400;
    sample.rendimiento = 60;
    sample.laminas = 4;
    sample.observacion = "";
    sample.divLargo = 3.96;
    sample.divAncho = 20.33;    
    sample.id = 5676;    
    return sample;
  }

  loadDropdowns(){
    this.linesService.loadAll();
    this.customersService.loadAll();
    this.sellersService.loadAll();
    this.materialsService.loadAll();    
  }

  subscribeDropdownsData(){
    this.linesService.items.subscribe(items => { this.lines = items });
    this.customersService.items.subscribe(items => { this.customers = items });
    this.sellersService.items.subscribe(items => { this.sellers = items });
    this.materialsService.items.subscribe(items => { this.materials = items });
  }

  searchCustomers = (text$: Observable<string>) => text$
    .debounceTime(200).distinctUntilChanged()
    .map(term => term.length < 2 ? [] : this.customers.filter(i => i.nombre.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)); 

  searchLines = (text$: Observable<string>) => text$
      .debounceTime(200).distinctUntilChanged()
      .map(term => term.length < 2 ? [] : this.lines.filter(i => i.nombre.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)); 

  searchSellers = (text$: Observable<string>) => text$
      .debounceTime(200).distinctUntilChanged()
      .map(term => term.length < 2 ? [] : this.sellers.filter(i => i.nombre.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)); 
  searchMaterials = (text$: Observable<string>) => text$
      .debounceTime(200).distinctUntilChanged()
      .map(term => term.length < 2 ? [] : this.materials.filter(i => i.nombre.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)); 
  nameFormatter = (x: {nombre: string}) => x.nombre;
}
