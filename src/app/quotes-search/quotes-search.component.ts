import { Component, ViewChild, AfterViewInit, OnInit, Input, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgModel } from '@angular/forms';
import { GridComponent } from '../common/grid/grid.component';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DialogService } from 'ng2-bootstrap-modal';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const customers = ['Cliente 1', 'Otro cliente'];

@Component({
  selector: 'app-quotes-search',
  templateUrl: './quotes-search.component.html',
  styleUrls: ['./quotes-search.component.scss']
})
export class QuotesSearchComponent implements OnInit {
  @ViewChild('grid') grid: GridComponent;
  dialogService: DialogService;
  public data: any[];
  public model: any;
  
  constructor(public toastr: ToastsManager, vcr: ViewContainerRef, dialogService: DialogService) {
    this.toastr.setRootViewContainerRef(vcr);
    this.dialogService = dialogService;
  }

  ngOnInit() {
    this.data = this.getData();  
    this.configureGrid();
  }

  searchCustomers = (text$: Observable<string>) =>
  text$
    .debounceTime(200)
    .distinctUntilChanged()
    .map(term => term.length < 2 ? [] : customers.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

  private configureGrid() {
      this.grid.source = {
          localdata: this.data,
          datatype: 'json',
          datafields: [
              { name: 'id', type: 'int' },
              { name: 'lineanombre', type: 'string' },
              { name: 'fecha', type: 'date' },
              { name: 'clientenombre', type: 'string' },
              { name: 'cantidad', type: 'int' }
          ],
          id: 'id'
      };
      this.grid.cols = [
          { text: 'ID', columngroup: 'id', datafield: 'id', cellsrenderer: this.linkrenderer, width: '10%' },                    
          { text: 'Línea', columngroup: 'lineanombre', datafield: 'lineanombre', width: '35%' },          
          { text: 'Cliente', columngroup: 'clientenombre', datafield: 'clientenombre', width: '35%' },
          { text: 'Cantidad', columngroup: 'cantidad', datafield: 'cantidad', cellsformat: 'n', cellsalign: 'right', width: '10%' },
          { text: 'Fecha', columngroup: 'fecha', datafield: 'fecha', cellsformat: 'yyyy-MM-dd', cellsalign: 'center', width: '10%' }          
      ];
      this.grid.grid.attrPageable = false;
      this.grid.grid.attrAutoheight = false;
  }

  linkrenderer = (row: number, column: any, value: any): any => {
    return `&nbsp;<a title="Abrir cotización #${value}" href="/quotes/${value}">${value}<a/>`;
  }

  private getData() {
    // select array_to_json(array_agg(row_to_json(t)))
    // from (
    //     select c.id, c.fecha, l.nombre as lineaNombre, cl.nombre as clienteNombre, c.cantidad
    //     from cotizacion as c
    //     inner join linea as l on l.id = c.lineaId
    //     inner join cliente as cl on cl.id = c.clienteId
    //     where c.fecha is not null
    //     limit 100
    // ) t
    return [{"fecha":"2006-08-09T19:37:21.28","clientenombre":"Nuevo cliente","id":1,"cantidad":10,"lineanombre":"Calcomanías"},{"fecha":"2006-08-10T08:45:43.657","clientenombre":"CIPET","id":2,"cantidad":250,"lineanombre":"Calcomanías"},{"fecha":"2006-08-10T11:43:54.077","clientenombre":"SEPER PRO S.A.","id":6,"cantidad":15,"lineanombre":"Calcomanías"},{"fecha":"2006-08-10T15:47:58.22","clientenombre":"PRODUCTO QUIMICOS ZAPI","id":8,"cantidad":25,"lineanombre":"EXHIBIDOR"},{"fecha":"2006-08-10T15:55:48.907","clientenombre":"PRODUCTO QUIMICOS ZAPI","id":9,"cantidad":25,"lineanombre":"EXHIBIDOR"},{"fecha":"2006-08-10T16:52:51.673","clientenombre":"UNILEVER","id":10,"cantidad":200,"lineanombre":"Calcomanías"},{"fecha":"2006-08-11T09:22:14.64","clientenombre":"SAVA","id":11,"cantidad":250,"lineanombre":"PLACAS"},{"fecha":"2006-08-11T11:45:19.28","clientenombre":"HACIENDA PUNTA ISLITA","id":12,"cantidad":52,"lineanombre":"ROTULOS"},{"fecha":"2006-08-11T15:51:32.187","clientenombre":"CIPET","id":13,"cantidad":1000,"lineanombre":"Calcomanías"},{"fecha":"2006-08-11T16:04:51.423","clientenombre":"CIPET","id":14,"cantidad":1000,"lineanombre":"Reglas"},{"fecha":"2006-08-11T16:10:10.343","clientenombre":"CIPET","id":15,"cantidad":1000,"lineanombre":"Calcomanías"},{"fecha":"2006-08-11T16:12:26.877","clientenombre":"CIPET","id":16,"cantidad":5000,"lineanombre":"Calcomanías"},{"fecha":"2006-08-11T16:14:27.077","clientenombre":"CIPET","id":17,"cantidad":1000,"lineanombre":"Reglas"},{"fecha":"2006-08-14T08:52:31.077","clientenombre":"MERCADEO UNIDO S.A.","id":18,"cantidad":5000,"lineanombre":"Reglas"},{"fecha":"2006-08-14T09:32:55.5","clientenombre":"ROMA PRINCE S.A.","id":19,"cantidad":5000,"lineanombre":"Habladores"},{"fecha":"2006-08-14T10:33:28.843","clientenombre":"MERCADEO UNIDO S.A.","id":20,"cantidad":5000,"lineanombre":"Escuadra Isósceles"},{"fecha":"2006-08-14T10:57:53.703","clientenombre":"MERCADEO UNIDO S.A.","id":21,"cantidad":10000,"lineanombre":"Transportador"},{"fecha":"2006-08-14T14:33:21.36","clientenombre":"ROMA PRINCE S.A.","id":22,"cantidad":5000,"lineanombre":"Habladores"},{"fecha":"2006-08-14T16:37:31.64","clientenombre":"ALIMENTOS JACKS DE C.A.","id":23,"cantidad":100,"lineanombre":"Cintillos"},{"fecha":"2006-08-14T16:39:43.687","clientenombre":"MOFY INTERNACIONAL","id":24,"cantidad":1000,"lineanombre":"Habladores"},{"fecha":"2006-08-15T10:40:22.157","clientenombre":"INTEL","id":25,"cantidad":40,"lineanombre":"Tarjetas"},{"fecha":"2006-08-15T10:59:30.953","clientenombre":"ENFOQUE A LA FAMILIA","id":26,"cantidad":200,"lineanombre":"Calendario de Escritorio"},{"fecha":"2006-08-15T11:02:13.89","clientenombre":"ENFOQUE A LA FAMILIA","id":27,"cantidad":300,"lineanombre":"Calendario de Escritorio"},{"fecha":"2006-08-15T14:25:49.14","clientenombre":"UNILEVER","id":28,"cantidad":3,"lineanombre":"Calcomanías"},{"fecha":"2006-08-15T14:47:45.173","clientenombre":"Medigray","id":29,"cantidad":200,"lineanombre":"EXHIBIDOR"},{"fecha":"2006-08-15T15:40:55.187","clientenombre":"MERCADEO UNIDO S.A.","id":30,"cantidad":6000,"lineanombre":"Habladores"},{"fecha":"2006-08-15T16:03:44.547","clientenombre":"MERCADEO UNIDO S.A.","id":31,"cantidad":4000,"lineanombre":"Habladores"},{"fecha":"2006-08-15T16:11:57.89","clientenombre":"MERCADEO UNIDO S.A.","id":32,"cantidad":6000,"lineanombre":"Habladores"},{"fecha":"2006-08-15T16:16:33.173","clientenombre":"MERCADEO UNIDO S.A.","id":33,"cantidad":2000,"lineanombre":"Habladores"},{"fecha":"2006-08-15T16:28:11.89","clientenombre":"MERCADEO UNIDO S.A.","id":34,"cantidad":5000,"lineanombre":"Separadores"},{"fecha":"2006-08-16T14:09:22.687","clientenombre":"DEMASA","id":35,"cantidad":400,"lineanombre":"ROTULOS"},{"fecha":"2006-08-16T14:11:20.11","clientenombre":"DEMASA","id":36,"cantidad":400,"lineanombre":"ROTULOS"},{"fecha":"2006-08-16T14:13:43.827","clientenombre":"DEMASA","id":37,"cantidad":800,"lineanombre":"Calcomanías"},{"fecha":"2006-08-16T15:04:59.453","clientenombre":"M&S Publicidad","id":38,"cantidad":100,"lineanombre":"ROTULOS"},{"fecha":"2006-08-16T15:20:43.953","clientenombre":"M&S Publicidad","id":39,"cantidad":250,"lineanombre":"ROTULOS"},{"fecha":"2006-08-16T15:24:13.703","clientenombre":"M&S Publicidad","id":40,"cantidad":100,"lineanombre":"ROTULOS"},{"fecha":"2006-08-16T15:26:17.017","clientenombre":"M&S Publicidad","id":41,"cantidad":250,"lineanombre":"ROTULOS"},{"fecha":"2006-08-16T15:39:15.827","clientenombre":"INTEL","id":42,"cantidad":120,"lineanombre":"Tarjetas"},{"fecha":"2006-08-16T16:28:12.953","clientenombre":"MERCADEO UNIDO S.A.","id":43,"cantidad":3000,"lineanombre":"Separadores"},{"fecha":"2006-08-16T16:34:23.877","clientenombre":"MERCADEO UNIDO S.A.","id":44,"cantidad":6000,"lineanombre":"Separadores"},{"fecha":"2006-08-17T09:26:18.47","clientenombre":"MOFY INTERNACIONAL","id":45,"cantidad":500,"lineanombre":"Habladores"},{"fecha":"2006-08-17T09:43:13.28","clientenombre":"MOFY INTERNACIONAL","id":46,"cantidad":1000,"lineanombre":"Habladores"},{"fecha":"2006-08-17T09:46:15.72","clientenombre":"MOFY INTERNACIONAL","id":47,"cantidad":500,"lineanombre":"Habladores"},{"fecha":"2006-08-17T09:49:20.377","clientenombre":"MOFY INTERNACIONAL","id":48,"cantidad":1000,"lineanombre":"Habladores"},{"fecha":"2006-08-17T11:10:40.14","clientenombre":"ICONOS ARTES GRAFICAS","id":49,"cantidad":250,"lineanombre":"Calcomanías"},{"fecha":"2006-08-17T11:51:25.937","clientenombre":"CONTRA PUNTO","id":50,"cantidad":100000,"lineanombre":"Calendarios de bolsillo."},{"fecha":"2006-08-17T13:58:27.593","clientenombre":"CONTRA PUNTO","id":51,"cantidad":200000,"lineanombre":"Calendarios de bolsillo."},{"fecha":"2006-08-17T14:45:24.39","clientenombre":"MERCADEO UNIDO S.A.","id":52,"cantidad":3000,"lineanombre":"Separadores"},{"fecha":"2006-08-17T14:56:56.47","clientenombre":"MERCADEO UNIDO S.A.","id":53,"cantidad":4000,"lineanombre":"Separadores"},{"fecha":"2006-08-17T15:06:39.627","clientenombre":"MERCADEO UNIDO S.A.","id":54,"cantidad":2000,"lineanombre":"Separadores"},{"fecha":"2006-08-17T15:15:13.407","clientenombre":"MERCADEO UNIDO S.A.","id":55,"cantidad":4000,"lineanombre":"Separadores"},{"fecha":"2006-08-17T15:19:21.377","clientenombre":"MERCADEO UNIDO S.A.","id":56,"cantidad":3000,"lineanombre":"Separadores"},{"fecha":"2006-08-17T15:26:59.937","clientenombre":"MERCADEO UNIDO S.A.","id":57,"cantidad":1000,"lineanombre":"Cintillos"},{"fecha":"2006-08-17T15:57:41.797","clientenombre":"CETEBEDI S.A.","id":58,"cantidad":250,"lineanombre":"Habladores"},{"fecha":"2006-08-17T16:05:25.563","clientenombre":"MERCADEO UNIDO S.A.","id":59,"cantidad":2000,"lineanombre":"Cintillos"},{"fecha":"2006-08-17T16:08:43.923","clientenombre":"MERCADEO UNIDO S.A.","id":60,"cantidad":500,"lineanombre":"Cintillos"},{"fecha":"2006-08-17T16:10:35.313","clientenombre":"MERCADEO UNIDO S.A.","id":61,"cantidad":500,"lineanombre":"Cintillos"},{"fecha":"2006-08-18T09:32:59.577","clientenombre":"MERCADEO UNIDO S.A.","id":62,"cantidad":500,"lineanombre":"Cintillos"},{"fecha":"2006-08-18T09:34:43.36","clientenombre":"MERCADEO UNIDO S.A.","id":63,"cantidad":1000,"lineanombre":"Cintillos"},{"fecha":"2006-08-18T09:38:27.39","clientenombre":"MERCADEO UNIDO S.A.","id":64,"cantidad":4000,"lineanombre":"Habladores"},{"fecha":"2006-08-18T09:47:44.97","clientenombre":"MERCADEO UNIDO S.A.","id":65,"cantidad":3000,"lineanombre":"Habladores"},{"fecha":"2006-08-18T09:52:06.733","clientenombre":"MERCADEO UNIDO S.A.","id":66,"cantidad":2000,"lineanombre":"Habladores"},{"fecha":"2006-08-18T10:03:40.767","clientenombre":"CIPET","id":67,"cantidad":5000,"lineanombre":"Calcomanías"},{"fecha":"2006-08-18T10:12:31.703","clientenombre":"MERCADEO UNIDO S.A.","id":68,"cantidad":1000,"lineanombre":"Habladores"},{"fecha":"2006-08-18T10:17:19.407","clientenombre":"MERCADEO UNIDO S.A.","id":69,"cantidad":4000,"lineanombre":"Habladores"},{"fecha":"2006-08-18T11:11:29.78","clientenombre":"LDEN HARVES DE C.R","id":70,"cantidad":500,"lineanombre":"Habladores"},{"fecha":"2006-08-18T11:18:00.39","clientenombre":"LDEN HARVES DE C.R","id":71,"cantidad":1000,"lineanombre":"Habladores"},{"fecha":"2006-08-18T11:48:37.157","clientenombre":"MATTEL LATIN AMERICA","id":72,"cantidad":300,"lineanombre":"EXHIBIDOR"},{"fecha":"2006-08-18T11:52:06.733","clientenombre":"MATTEL LATIN AMERICA","id":73,"cantidad":50,"lineanombre":"EXHIBIDOR"},{"fecha":"2006-08-18T14:50:35.25","clientenombre":"MATTEL LATIN AMERICA","id":74,"cantidad":50,"lineanombre":"EXHIBIDOR"},{"fecha":"2006-08-18T15:00:10.733","clientenombre":"MATTEL LATIN AMERICA","id":75,"cantidad":50,"lineanombre":"EXHIBIDOR"},{"fecha":"2006-08-22T08:40:18.233","clientenombre":"Asoc. de vecinos de Montenegro","id":76,"cantidad":400,"lineanombre":"Calcomanías"},{"fecha":"2006-08-22T08:43:54.983","clientenombre":"Asoc. de vecinos de Montenegro","id":77,"cantidad":400,"lineanombre":"Calcomanías"},{"fecha":"2006-08-22T14:29:20.64","clientenombre":"HENKEL-LOCTITE","id":78,"cantidad":10000,"lineanombre":"Reglas"},{"fecha":"2006-08-22T14:47:03.127","clientenombre":"POLLOS EL CANTOR","id":79,"cantidad":1000,"lineanombre":"Calcomanías"},{"fecha":"2006-08-22T14:53:30.797","clientenombre":"CAMARA DE COMERCIO IND. Y TURISMO ALAJUELA","id":80,"cantidad":500,"lineanombre":"Calcomanías"},{"fecha":"2006-08-22T15:10:23.937","clientenombre":"CAMARA DE COMERCIO IND. Y TURISMO ALAJUELA","id":81,"cantidad":1000,"lineanombre":"Calcomanías"},{"fecha":"2006-08-22T15:12:17.017","clientenombre":"CAMARA DE COMERCIO IND. Y TURISMO ALAJUELA","id":82,"cantidad":2000,"lineanombre":"Calcomanías"},{"fecha":"2006-08-22T15:19:18.843","clientenombre":"VEINSA","id":83,"cantidad":1000,"lineanombre":"PLACAS"},{"fecha":"2006-08-22T15:20:59.78","clientenombre":"VEINSA","id":84,"cantidad":2000,"lineanombre":"PLACAS"},{"fecha":"2006-08-24T10:39:29.25","clientenombre":"ORO PUBLICIDAD","id":85,"cantidad":500,"lineanombre":"Tarjetas"},{"fecha":"2006-08-24T10:46:57.657","clientenombre":"TRIMPOT ELECTRONICAS","id":86,"cantidad":3000,"lineanombre":"Tarjetas"},{"fecha":"2006-08-24T11:30:11.53","clientenombre":"TRIMPOT ELECTRONICAS","id":87,"cantidad":6000,"lineanombre":"Tarjetas"},{"fecha":"2006-08-24T14:20:24.75","clientenombre":"MATTEL LATIN AMERICA","id":88,"cantidad":400,"lineanombre":"ROTULOS"},{"fecha":"2006-08-24T14:42:24.407","clientenombre":"MATTEL LATIN AMERICA","id":89,"cantidad":400,"lineanombre":"ROTULOS"},{"fecha":"2006-08-24T14:47:10.173","clientenombre":"PUNTO ROJO","id":90,"cantidad":150,"lineanombre":"Tarjetas"},{"fecha":"2006-08-24T14:49:00.953","clientenombre":"PUNTO ROJO","id":91,"cantidad":150,"lineanombre":"Tarjetas"},{"fecha":"2006-08-24T15:21:34.017","clientenombre":"FOMMOR S.A.","id":92,"cantidad":100,"lineanombre":"Calcomanías"},{"fecha":"2006-08-24T15:31:22.843","clientenombre":"FOMMOR S.A.","id":93,"cantidad":200,"lineanombre":"Calcomanías"},{"fecha":"2006-08-24T15:36:08.953","clientenombre":"FOMMOR S.A.","id":94,"cantidad":300,"lineanombre":"Calcomanías"},{"fecha":"2006-08-24T15:49:41.97","clientenombre":"FOMMOR S.A.","id":95,"cantidad":100,"lineanombre":"Calcomanías"},{"fecha":"2006-08-24T16:10:18.75","clientenombre":"CAMARA DE COMERCIO IND. Y TURISMO ALAJUELA","id":96,"cantidad":1000,"lineanombre":"Calcomanías"},{"fecha":"2006-08-24T16:40:35.593","clientenombre":"PORTONES SALAS","id":97,"cantidad":1000,"lineanombre":"PLACAS"},{"fecha":"2006-08-24T16:44:09.577","clientenombre":"PORTONES SALAS","id":98,"cantidad":1000,"lineanombre":"Calcomanías"},{"fecha":"2006-08-24T16:55:42.377","clientenombre":"CONTRA PUNTO","id":99,"cantidad":120,"lineanombre":"ROTULOS"},{"fecha":"2006-08-24T17:00:10.267","clientenombre":"CONTRA PUNTO","id":100,"cantidad":240,"lineanombre":"ROTULOS"},{"fecha":"2006-08-24T17:02:10.517","clientenombre":"CONTRA PUNTO","id":101,"cantidad":60,"lineanombre":"ROTULOS"},{"fecha":"2006-08-24T17:14:06.297","clientenombre":"Corpora Tres Montes","id":102,"cantidad":500,"lineanombre":"ROTULOS"},{"fecha":"2006-08-24T17:18:22.5","clientenombre":"Corpora Tres Montes","id":103,"cantidad":500,"lineanombre":"ROTULOS"},{"fecha":"2006-08-25T11:06:06.047","clientenombre":"DISTRIBUIDORA LA FLORIDA","id":104,"cantidad":5000,"lineanombre":"Calcomanías"}]
  }
}
