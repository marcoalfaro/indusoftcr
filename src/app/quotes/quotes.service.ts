import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from '../common/baseservice.service';
import { Quote } from '../models/quote'

@Injectable()
export class QuotesService extends BaseService<Quote>{
  constructor(http: Http, ){
    super(http, 'cotizaciones');
  }
}