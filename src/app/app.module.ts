import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './layers/services/user.service';
import { AccountSearchModule } from './views/account-search/account-search.module';

import { routingComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HomePageModule } from './views/home-page/home-page.module';
import { VivintGiftNavbarComponent } from './components/navbar-components/vivint-gift-navbar/vivint-gift-navbar.component';
import { EfgPartnerswebNavbarComponent } from './components/navbar-components/efg-partnersweb-navbar/efg-partnersweb-navbar.component';
import { EfgPartnerswebFileprocessingComponent } from './components/fileprocessing-components/efg-partnersweb-fileprocessing/efg-partnersweb-fileprocessing.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    VivintGiftNavbarComponent,
    EfgPartnerswebNavbarComponent
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
