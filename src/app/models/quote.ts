import { GenericItem } from './genericItem';

export class Quote {
  id: number;
  cliente: GenericItem;
  vendedor: GenericItem;
  material: GenericItem;
  linea: GenericItem;
  fecha: Date;
  precioUnitario: number;
  subTotalCrc: number;
  subTotalUsd: number;
  porcentaje: number;
  totalUsd: number;
  totalCrc: number;
  cantidad: number;
  montaje: number;
  base: number;
  altura: number;
  tintas: number;
  cubrimiento: number;
  troquel: number;
  doblez: number;
  cuatricromia: number;
  otro: number;
  porcEvento: number;
  aplicada: boolean;
  fecAplicada: Date;
  fecRegistro: Date;
  numPedido: number;
  precioMaterial: number;
  precioTintas: number; 
  precioArte: number;
  precioImpresion: number;
  precioMolde: number;
  precioCorte: number;
  precioPositivo: number;
  precioSolvente: number;
  rendimiento: number;
  laminas: number;
  observacion: string;
  divLargo: number;
  divAncho: number;
  
  constructor() {
      this.id = 0;
     
  }
}
