import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vivint-switch-search-form',
  templateUrl: './vivint-switch-search-form.component.html',
  styleUrls: []
})
export class VivintSwitchSearchFormComponent implements OnInit {
  firstNameMsg;
  lastNameMsg;
  accountNumberMsg;
  phoneNumberMsg;
  zipMsg;
  searchResultsMsg;

  constructor() { }

  ngOnInit(): void {
  }

}
