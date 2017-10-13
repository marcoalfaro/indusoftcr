export class Configuration {
    id: number;    
    cedula: string;
    direccion: string;
    telefono: string;
    email: string;
    utilidad: number;
    impuestoVenta: number;
    precioMolde: number;
    precioTinta: number;
    precioPositivo: number;
    precioArte: number;
    precioSolvente: number;
    precioCorte: number;
    precioVelocidad: number;
    precioHoraImpresion: number;
    activo: boolean;
    
    constructor() {
        this.id = 0;        
        this.activo = true;
        this.cedula = '';
        this.direccion = '';
        this.telefono = '';
        this.email = '';
        this.utilidad = 0;
        this.impuestoVenta = 0;
        this.precioMolde = 0;
        this.precioTinta = 0;
        this.precioPositivo = 0;
        this.precioArte = 0;
        this.precioSolvente = 0;
        this.precioCorte = 0;
        this.precioVelocidad = 0;
        this.precioHoraImpresion = 0;
    }
}
