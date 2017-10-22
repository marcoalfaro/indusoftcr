import { IIdentifiable } from '../common/iidentifiable';

export class GenericItem implements IIdentifiable {
    id: number;
    nombre: string;
    
    constructor() {
        this.id = 0;
        this.nombre = '';
    }
}
