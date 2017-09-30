export class Customer {
    id: number;
    nombre: string;
    activo: boolean;
    cedula: string;
    telefono: string;
    contactoNombre: string;
    contactoTelefono: string;    
    contactoCorreo: string;    
    
    constructor() {
        this.id = 0;
        this.nombre = '';         
        this.activo = true;
        this.cedula = '';
        this.telefono = '';
        this.contactoNombre = '';
        this.contactoTelefono = '';
        this.contactoCorreo = '';
    }
}
