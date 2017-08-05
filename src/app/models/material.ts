export class Material {
    id: number;
    nombre: string;
    activo: boolean;
    altura: number;
    base: number;
    codigoInventario: number;
    costoInventario: number;    
    
    constructor() {
        this.id = 0;
        this.nombre = '';         
        this.activo = true;
        this.altura = 0;
        this.base = 0;
        this.codigoInventario = 0;
        this.costoInventario = 0;
    }
}
