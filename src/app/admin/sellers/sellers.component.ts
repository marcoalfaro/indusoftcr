import { Component, ViewChild, AfterViewInit, OnInit, Input, ViewContainerRef } from '@angular/core';
import { GenericItem } from '../../models/genericItem';
import { GridComponent } from '../../common/grid/grid.component';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ConfirmComponent } from '../../common/confirm.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { NgModel } from '@angular/forms';
import { Seller } from 'app/models/seller';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.scss']
})
export class SellersComponent implements OnInit {  
  @ViewChild('grid') grid: GridComponent;
  selectedItem: GenericItem = new GenericItem();
  dialogService: DialogService;
  data: any[];
  readonly entityName = 'Vendedor';  

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef, dialogService: DialogService) {
      this.toastr.setRootViewContainerRef(vcr);
      this.dialogService = dialogService;
  }

  ngOnInit() {
    this.data = this.getData();  
    this.configureGrid();
  } 

  rowSelected(event): void {
      this.selectedItem = event.args.row;
  }

  cancel() {
    if (this.isItemPopulated()) {
        this.clearSelection();
        this.toastr.info(`Nuevo ${this.entityName}!`);
    }
  }

  save(){
    const name = this.selectedItem.nombre;
    if (this.isNameRepeated())
      this.toastr.error(`El ${this.entityName} "${name}" está repetido`, 'Item repetido');
    else    
      this.toastr.success(`El ${this.entityName} "${name}" fue guardado`, 'Guardar');
  }    

  delete() {
      this.dialogService.addDialog(ConfirmComponent, {
          title: 'Confirmación',
          message: `¿Está seguro(a) de borrar el ${this.entityName.toLowerCase()} "${this.selectedItem.nombre}"?`
      })
          .subscribe((isConfirmed) => {
              if (isConfirmed) {
                  this.clearSelection();
                  this.toastr.success(`${this.entityName} borrado exitosamente`, 'Borrado');
              }
          });
  } 

  isItemPopulated() {
    return this.selectedItem && this.selectedItem.nombre.trim().length > 0;
  }

  private configureGrid() {
    this.grid.source = {
        localdata: this.data,
        datatype: 'json',
        datafields: [
            { name: 'id', type: 'int' },
            { name: 'nombre', type: 'string' },
            { name: 'email', type: 'string' },
            { name: 'telefono', type: 'string' },
            { name: 'activo', type: 'boolean' }
        ],
        id: 'id'
    };
    this.grid.cols = [
        { text: 'ID', columngroup: 'id', datafield: 'id', width: '10%' },
        { text: 'Nombre', columngroup: 'nombre', datafield: 'nombre' }
    ];
    this.grid.grid.attrPageable = false;
    this.grid.grid.attrAutoheight = false;
}

  private isNameRepeated(){     
    const item = this.selectedItem;
    return this.data.find(x => x.id !== item.id && x.nombre.trim().toLowerCase() === item.nombre.trim().toLowerCase());
  }
   
  private clearSelection() {
      this.grid.grid.clearselection();
      this.selectedItem = new GenericItem();
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
