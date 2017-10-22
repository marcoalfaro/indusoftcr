import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from '../baseservice.service';
import { Company } from '../../models/company';

@Injectable()
export class CompaniesService extends BaseService<Company>{
  constructor(http: Http){
    super(http, 'empresas');
  }
}