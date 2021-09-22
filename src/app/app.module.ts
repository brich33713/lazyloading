import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './layers/services/user.service';
import { AccountSearchModule } from './views/account-search/account-search.module';

import { routingComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { VivintSmarthomeInfoBoxComponent } from './components/info-box-components/vivint-smarthome-info-box/vivint-smarthome-info-box.component';
import { HomePageModule } from './views/home-page/home-page.module';
import { VivintSmarthomeNavbarComponent } from './components/navbar-components/vivint-smarthome-navbar/vivint-smarthome-navbar.component';
import { GenericNavbarComponent } from './components/navbar-components/generic-navbar/generic-navbar.component';
import { DishNavbarComponent } from './components/navbar-components/dish-navbar/dish-navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    VivintSmarthomeInfoBoxComponent,
    VivintSmarthomeNavbarComponent,
    GenericNavbarComponent,
    DishNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountSearchModule,
    HomePageModule,
    FormsModule
  ],
  providers: [UserService]
  ,bootstrap: [AppComponent]
})
export class AppModule { }
