import { Component, OnInit } from '@angular/core';
import { FunctionService } from '../layers/services/functions.service';

@Component({
  selector: 'app-efg-partnersweb-fileprocessing',
  templateUrl: './efg-partnersweb-fileprocessing.component.html',
  styleUrls: ['./efg-partnersweb-fileprocessing.component.css']
})
export class EfgPartnerswebFileprocessingComponent implements OnInit {
  programId;
  companyInvoices;
  lstFileRecords = [];
  
  route = this.functions.route

  constructor(private functions: FunctionService) { }

  ngOnInit(): void {
  }

}
