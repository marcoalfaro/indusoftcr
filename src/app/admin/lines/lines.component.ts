import { Component, ViewChild, AfterViewInit, OnInit, Input, ViewContainerRef } from '@angular/core';
import { GenericItem } from '../../models/genericItem';
import { GridComponent } from '../../common/grid/grid.component';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ConfirmComponent } from '../../common/confirm.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { NgModel } from '@angular/forms';
import { LinesService } from '../../common/services/lines.service';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss'],
  providers: [LinesService]
})
export class LinesComponent implements OnInit {
  @ViewChild('grid') grid: GridComponent;
  selectedItem: GenericItem = new GenericItem();
  dialogService: DialogService;
  service: LinesService;
  data: GenericItem[];
  readonly entityName = 'Línea';  

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef, dialogService: DialogService, service: LinesService) {
      this.toastr.setRootViewContainerRef(vcr);
      this.dialogService = dialogService;
      this.service = service;
      this.service.loadAll();    
  }

  ngOnInit(){
    this.configureGrid();
    this.service.items.subscribe(items => { 
      if (items.length > 0){
        this.data = items;
        this.grid.source.localdata = this.data;
        this.grid.updatebounddata();
      }
    });
  }

  rowSelected(event): void {
      this.selectedItem = event.args.row;
  }

  cancel() {
    if (this.isItemPopulated()) {
        this.clearSelection();
        this.toastr.info(`Nueva ${this.entityName}!`);
    }
  }

  save(){
    const name = this.selectedItem.nombre;
    if (this.isNameRepeated())
      this.toastr.error(`La ${this.entityName} "${name}" está repetida`, 'Item repetido');
    else    
      this.toastr.success(`La ${this.entityName} "${name}" fue guardado`, 'Guardar');
  }    

  delete() {
      this.dialogService.addDialog(ConfirmComponent, {
          title: 'Confirmación',
          message: `¿Está seguro(a) de borrar la ${this.entityName.toLowerCase()} "${this.selectedItem.nombre}"?`
      })
          .subscribe((isConfirmed) => {
              if (isConfirmed) {
                  this.clearSelection();
                  this.toastr.success(`${this.entityName} borrada exitosamente`, 'Borrado');
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
            { name: 'nombre', type: 'string' }
        ],
        id: 'id'
    };
    this.grid.cols = [
        { text: 'ID', columngroup: 'id', datafield: 'id', width: '10%' },
        { text: 'Nombre', columngroup: 'nombre', datafield: 'nombre', width: '90%' }
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
}
