import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from '../baseservice.service';
import { Seller } from '../../models/seller';

@Injectable()
export class SellersService extends BaseService<Seller>{
  constructor(http: Http){
    super(http, 'vendedores');
  }
}