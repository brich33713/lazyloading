import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vivint-smarthome-info-box',
  templateUrl: './vivint-smarthome-info-box.component.html',
  styleUrls: ['./vivint-smarthome-info-box.component.css']
})
export class VivintSmarthomeInfoBoxComponent implements OnInit {
  helpButton(){
    console.log(document.getElementById("AccountNumber"))
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
