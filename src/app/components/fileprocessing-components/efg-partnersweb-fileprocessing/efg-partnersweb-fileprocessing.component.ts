import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FunctionService } from '../../../layers/services/functions.service';

@Component({
  selector: 'app-efg-partnersweb-fileprocessing',
  templateUrl: './efg-partnersweb-fileprocessing.component.html',
  styleUrls: ['./efg-partnersweb-fileprocessing.component.css']
})
export class EfgPartnerswebFileprocessingComponent implements OnInit {
  programId;
  companyInvoices;
  lstFileRecords = [{InvoiceNumber: 2, InvoiceDate: 3, Status: "help", InvoiceTotal: '$30'}];

  invoiceRoute(num){
    this.router.navigate(['/Invoice/NewInvoice'],{queryParams: {FileId: num}})
  }

  constructor(private functions: FunctionService, private router: Router) { }

  ngOnInit(): void {
  }

}
