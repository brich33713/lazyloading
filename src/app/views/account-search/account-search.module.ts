import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountSearchRoutingModule } from './account-search-routing.module';
import { AccountSearchComponent } from './account-search.component';
import { AccountInfoComponent } from 'src/app/components/account-info/account-info.component';
import { SearchFormComponent } from 'src/app/components/search-form/search-form.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AccountSearchComponent,
    AccountInfoComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AccountSearchRoutingModule
  ],
  exports: [
    AccountInfoComponent,
    SearchFormComponent
  ]
})
export class AccountSearchModule { }
