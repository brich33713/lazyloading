import { Component, OnInit } from '@angular/core';
import { FunctionService } from '../../../layers/services/functions.service';

@Component({
  selector: 'app-efg-partnersweb-navbar',
  templateUrl: './efg-partnersweb-navbar.component.html',
  styleUrls: ['./efg-partnersweb-navbar.component.css']
})
export class EfgPartnerswebNavbarComponent implements OnInit {
  logOut = this.functions.logOut
  constructor(private functions: FunctionService) { }

  ngOnInit(): void {
  }

}
