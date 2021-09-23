import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountSearchRoutingModule } from './account-search-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { searchFormComponents } from 'src/app/layers/repositories/SearchComponent.repository';



@NgModule({
  declarations: [
    searchFormComponents
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AccountSearchRoutingModule
  ],
  exports: [
    searchFormComponents
  ]
})
export class AccountSearchModule { }
