import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { GenericItem } from '../../models/genericItem';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
  items: Observable<GenericItem[]>
  private _items: BehaviorSubject<GenericItem[]>;
  private baseUrl: string;
  private entityName: string;  
  private dataStore: {
    items: GenericItem[]
  };

  constructor(private http: Http) {
    this.entityName = 'lineas';
    this.baseUrl = `http://59dc2477c86a4f00124c57b0.mockapi.io/${this.entityName}`;    
    this.dataStore = { items: [] };
    this._items = <BehaviorSubject<GenericItem[]>>new BehaviorSubject([]);
    this.items = this._items.asObservable();
  }

  loadAll() {
    this.http.get(`${this.baseUrl}`).map(response => response.json()).subscribe(data => {
      this.dataStore.items = data;
      this._items.next(Object.assign({}, this.dataStore).items);
    }, error => console.log('Could not load todos.'));
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
    }, error => console.log('Could not load todo.'));
  }

  create(newItem: GenericItem) {
    this.http.post(`${this.baseUrl}`, JSON.stringify(newItem))
      .map(response => response.json()).subscribe(data => {
        this.dataStore.items.push(data);
        this._items.next(Object.assign({}, this.dataStore).items);
      }, error => console.log('Could not create todo.'));
  }

  update(updatedItem: GenericItem) {
    this.http.put(`${this.baseUrl}/${updatedItem.id}`, JSON.stringify(updatedItem))
      .map(response => response.json()).subscribe(data => {
        this.dataStore.items.forEach((t, i) => {
          if (t.id === data.id) { this.dataStore.items[i] = data; }
        });

        this._items.next(Object.assign({}, this.dataStore).items);
      }, error => console.log('Could not update todo.'));
  }

  remove(itemId: number) {
    this.http.delete(`${this.baseUrl}/${itemId}`).subscribe(response => {
      this.dataStore.items.forEach((t, i) => {
        if (t.id === itemId) { this.dataStore.items.splice(i, 1); }
      });

      this._items.next(Object.assign({}, this.dataStore).items);
    }, error => console.log('Could not delete todo.'));
  }
}