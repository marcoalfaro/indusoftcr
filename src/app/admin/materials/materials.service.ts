import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from '../../common/baseservice.service';
import { Material } from '../../models/material';

@Injectable()
export class MaterialsService extends BaseService<Material>{
  constructor(http: Http){
    super(http, 'materiales');
  }
}