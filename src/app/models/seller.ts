export class Seller {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
    activo: boolean;
    
    constructor() {
        this.id = 0;
        this.nombre = '';         
        this.activo = true;
        this.email = '';
        this.telefono = '';        
    }
}
