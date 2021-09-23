import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './layers/services/user.service';
import { AccountSearchModule } from './views/account-search/account-search.module';

import { routingComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HomePageModule } from './views/home-page/home-page.module';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents
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
