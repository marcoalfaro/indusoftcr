import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from '../baseservice.service';
import { Customer } from '../../models/customer';

@Injectable()
export class CustomersService extends BaseService<Customer>{
  constructor(http: Http){
    super(http, 'clientes');
  }
}