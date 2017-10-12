import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from '../../common/baseservice.service';
import { Configuration } from '../../models/configuration';

@Injectable()
export class CompanyConfigService extends BaseService<Configuration>{
  constructor(http: Http){
    super(http, 'empresaconfigs');
  }
}