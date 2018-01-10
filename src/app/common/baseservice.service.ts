import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IIdentifiable } from './iidentifiable';
import 'rxjs/add/operator/map';

export class BaseService<T extends IIdentifiable> {
  wasNotFound: Observable<boolean>;
  items: Observable<T[]>;
  private _items: BehaviorSubject<T[]>;
  private _wasNotFound: BehaviorSubject<boolean>;
  private baseUrl: string;
  private entityName: string;  
  private dataStore: {
    items: T[]
  };

  constructor(private http: Http, resourceName: string) {
    this.entityName = resourceName;
    this.baseUrl = `https://59dc2477c86a4f00124c57b0.mockapi.io/${this.entityName}`;    
    this.dataStore = { items: [] };
    this._items = <BehaviorSubject<T[]>>new BehaviorSubject([]);
    this._wasNotFound = <BehaviorSubject<boolean>>new BehaviorSubject(false);
    this.items = this._items.asObservable();
    this.wasNotFound = this._wasNotFound.asObservable();
  }

  loadAll() {
    this.http.get(`${this.baseUrl}`).map(response => response.json()).subscribe(data => {
      this.dataStore.items = data;
      this._items.next(Object.assign({}, this.dataStore).items);
    }, error => console.log(`Could not ${this.entityName} todos.`));
  }

  load(id: number | string) {
    this.http.get(`${this.baseUrl}/${id}`).map(response => response.json()).subscribe(data => {
      let notFound = true;

      this.dataStore.items.forEach((item, index) => {
        if (item.id === data.id) {
          this.dataStore.items[index] = data;
          notFound = false;
        }
      });

      if (notFound) {
        this.dataStore.items.push(data);
      }

      this._items.next(Object.assign({}, this.dataStore).items);
    }, error => {
      this._wasNotFound.next(true);
    });
  }

  create(newItem: T) {
    this.http.post(`${this.baseUrl}`, JSON.stringify(newItem))
      .map(response => response.json()).subscribe(data => {
        this.dataStore.items.push(data);
        this._items.next(Object.assign({}, this.dataStore).items);
      }, error => console.log(`Could not create ${this.entityName}.`));
  }

  update(updatedItem: T) {
    this.http.put(`${this.baseUrl}/${updatedItem.id}`, JSON.stringify(updatedItem))
      .map(response => response.json()).subscribe(data => {
        this.dataStore.items.forEach((t, i) => {
          if (t.id === data.id) { this.dataStore.items[i] = data; }
        });

        this._items.next(Object.assign({}, this.dataStore).items);
      }, error => console.log(`Could not update ${this.entityName}.`));
  }

  remove(itemId: number) {
    this.http.delete(`${this.baseUrl}/${itemId}`).subscribe(response => {
      this.dataStore.items.forEach((t, i) => {
        if (t.id === itemId) { this.dataStore.items.splice(i, 1); }
      });

      this._items.next(Object.assign({}, this.dataStore).items);
    }, error => console.log(`Could not delete ${this.entityName}.`));
  }
}