import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { homePageComponents } from 'src/app/layers/repositories/HomePage.repository';
import { HomePageRoutingModule } from './home-page-routing.module';



@NgModule({
  declarations: [
    homePageComponents
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HomePageRoutingModule
  ],
  exports: [
    homePageComponents
  ]
})
export class HomePageModule { }
