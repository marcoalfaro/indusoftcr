import { Component, ViewChild, AfterViewInit, OnInit, Input, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
import { QuotesService } from 'app/quotes/quotes.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
  providers: [LinesService, CustomersService, SellersService, MaterialsService, QuotesService]
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
  id: number;
  quotesService: QuotesService;
  isEdit: boolean = false;

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef, dialogService: DialogService
              ,linesService: LinesService
              ,customersService: CustomersService
              ,sellersService: SellersService
              ,materialsService: MaterialsService
              ,route: ActivatedRoute
              ,quotesService: QuotesService) {
    route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.toastr.setRootViewContainerRef(vcr);
    this.dialogService = dialogService;
    this.linesService = linesService;
    this.customersService = customersService;
    this.sellersService = sellersService;
    this.materialsService = materialsService;
    this.loadDropdowns();
    this.quotesService = quotesService;
    if(!isNaN(this.id)){
      this.isEdit = true;
      this.quotesService.load(this.id);
    }
  }

  ngOnInit() {
    this.subscribeDropdownsData();
    if(this.isEdit){
      this.quotesService.items.subscribe(items => { 
        if (items.length === 1){
          this.model = items[0];
        }
      });
      this.quotesService.wasNotFound.subscribe(wasNotFound => {
        if(wasNotFound){
          this.toastr.error('La cotización solicitada no se ha encontrado.', 'No encontrada');
        }
      })
    }else{
      this.model = this.getSampleQuote();
    }
  }
  
  getSampleQuote() {
    const sample = new Quote();
    sample.cliente = { id: 25, nombre: 'CONTRA PUNTO' };
    sample.vendedor = { id: 3, nombre: 'Rafael Zamora' };
    sample.material = { id: 65, nombre: 'POLIESTIRENO #20' };
    sample.linea = { id: 1, nombre: 'Calcomanías' };
    sample.fecha = new Date('2006-08-24T17:00:10.267');
    sample.precioUnitario = 0;
    sample.subTotalCrc = 42600.84;
    sample.subTotalUsd = 75.84;
    sample.porcentaje = 0;
    sample.totalUsd = 185.52;
    sample.totalCrc = 95851.89;
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
    sample.fecRegistro = new Date('2006-08-24T17:02:04.263');
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
    sample.observacion = 'Estas son las notas de la cotización';
    sample.divLargo = 3.96;
    sample.divAncho = 20.33;
    sample.id = 5676;
    return sample;
  }

  loadDropdowns() {
    this.linesService.loadAll();
    this.customersService.loadAll();
    this.sellersService.loadAll();
    this.materialsService.loadAll();    
  }

  subscribeDropdownsData() {
    this.linesService.items.subscribe(items => { this.lines = items; });
    this.customersService.items.subscribe(items => { this.customers = items; });
    this.sellersService.items.subscribe(items => { this.sellers = items; });
    this.materialsService.items.subscribe(items => { this.materials = items; });
  }

  displayTemporalAlert() {
    this.toastr.error(`Probando`, 'Probando');
  }    
  

  searchCustomers = (text$: Observable<string>) => text$
    .debounceTime(200).distinctUntilChanged()
    .map(term => term.length < 2 ? 
      [] : this.customers
      .filter(i => i.nombre.toLowerCase().indexOf(term.toLowerCase()) > -1)
      .slice(0, 10)) 

  searchLines = (text$: Observable<string>) => text$
      .debounceTime(200).distinctUntilChanged()
      .map(term => term.length < 2 ? 
        [] : this.lines
        .filter(i => i.nombre.toLowerCase().indexOf(term.toLowerCase()) > -1)
        .slice(0, 10)) 

  searchSellers = (text$: Observable<string>) => text$
      .debounceTime(200).distinctUntilChanged()
      .map(term => term.length < 2 ? 
        [] : this.sellers
        .filter(i => i.nombre.toLowerCase().indexOf(term.toLowerCase()) > -1)
        .slice(0, 10))

  searchMaterials = (text$: Observable<string>) => text$
      .debounceTime(200).distinctUntilChanged()
      .map(term => term.length < 2 ? 
        [] : this.materials
        .filter(i => i.nombre.toLowerCase().indexOf(term.toLowerCase()) > -1)
        .slice(0, 10)) 
  nameFormatter = (x: {nombre: string}) => x.nombre;
  
}
