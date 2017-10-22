import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from '../common/baseservice.service';
import { GenericItem } from '../models/genericItem';

@Injectable()
export class QuotesService extends BaseService<GenericItem>{
  constructor(http: Http, ){
    super(http, 'cotizaciones');
  }
}