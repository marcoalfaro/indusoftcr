import { Component, ViewChild, AfterViewInit, OnInit, Input, ViewContainerRef } from '@angular/core';
import { GenericItem } from 'app/models/genericItem';
import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ConfirmComponent } from 'app/common/confirm.component';
import { DialogService } from "ng2-bootstrap-modal";
import { GridOptions } from 'app/common/gridOptions';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit {  
  @ViewChild('grid') myGrid: jqxGridComponent; 
  gridOptions: GridOptions = new GridOptions();    
  selectedItem: GenericItem = new GenericItem(); 
  dialogService: DialogService;
  data: any[];
  
  constructor(public toastr: ToastsManager, vcr: ViewContainerRef, dialogService: DialogService) {
    this.toastr.setRootViewContainerRef(vcr);    
    this.dialogService = dialogService;
  }

  ngOnInit() {
    this.data = this.getData();
    this.configureGrid();
  }

  configureGrid(){    
    this.gridOptions.source = {
        localdata: this.data,  
        // url: '../sampledata/products.xml' //Mae marquito aqui colocas la URL del api cuando uses services
        datatype: 'json',
        datafields: [
            { name: 'id', type: 'int' },
            { name: 'nombre', type: 'string' }
        ],
        id: 'id', 
    };
    this.gridOptions.dataAdapter = new jqx.dataAdapter(this.gridOptions.source);
    this.gridOptions.columns = [
        { text: 'ID', columngroup: 'id', datafield: 'id', width: '10%' },
        { text: 'Nombre', columngroup: 'nombre', datafield: 'nombre' }
    ];
  }

  rowSelected(event): void 
  {    
    this.selectedItem = event.args.row;   
  }   

  cancel(){ 
    if (this.isItemPopulated()){
        this.clearSelection();  
        this.toastr.info('Nueva Línea!');
    }    
  }  

  delete(){
    this.dialogService.addDialog(ConfirmComponent, {
        title:'Confirmación', 
        message:`¿Está seguro(a) de borrar la línea "${this.selectedItem.nombre}"?`})
        .subscribe((isConfirmed)=>{            
            if(isConfirmed) {
                this.clearSelection();                
                this.toastr.success('Línea borrada exitosamente', 'Borrado');
            }
        });   
  }

  save(){
    const name = this.selectedItem.nombre;
    if (this.isNameRepeated())
      this.toastr.error(`La línea "${name}" está repetida`, 'Línea repetida');  
    else    
      this.toastr.success(`La línea "${name}" fue guardada`, 'Guardar');
  }

  isNameRepeated(){     
    const item = this.selectedItem;
    return this.data.find(x => x.id !== item.id && x.nombre.trim().toLowerCase() === item.nombre.trim().toLowerCase());
  }

  clearSelection(){
    this.myGrid.clearselection();
    this.selectedItem = new GenericItem();
  }

  isItemPopulated(){
      return this.selectedItem && this.selectedItem.nombre.trim().length > 0;
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