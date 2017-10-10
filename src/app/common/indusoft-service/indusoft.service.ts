import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, HttpModule } from '@angular/http';

@Injectable()
export class IndusoftService<T> {
  url: string= "";
  
  constructor(private http: Http) { }

  get():Observable<Array<T>>{
    return this.http.get(this.url)
    .map((response: Response) => <Array<T>> response.json());
  }

}
