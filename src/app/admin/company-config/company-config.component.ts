import { Component, OnInit } from '@angular/core';
import { Configuration } from 'app/models/configuration';
import { CompanyConfigService } from '../../common/services/company-config.service';

@Component({
  selector: 'app-company-config',
  templateUrl: './company-config.component.html',
  styleUrls: ['./company-config.component.scss'],
  providers: [CompanyConfigService]
})
export class CompanyConfigComponent implements OnInit {
  model: Configuration = new Configuration();
  service: CompanyConfigService;

  constructor(service: CompanyConfigService) {
    this.service = service;
    this.service.load(1);    
  }

  ngOnInit() {
    this.service.items.subscribe(items => { 
      if (items.length > 0){
        this.model = items[0];
      }
    });
  }
}
