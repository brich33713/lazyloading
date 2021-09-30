import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishSearchFormComponent } from './components/search-form-components/dish-search-form/dish-search-form.component';
import { LoginComponent } from './components/login/login.component';
import { VivintSearchFormComponent } from './components/search-form-components/vivint-search-form/vivint-search-form.component';
import { CheckLoggedInGuard } from './guards/check-logged-in.guard';
import { CheckCompanyGuard } from './guards/check-company.guard';
import { EfgPartnerswebFileprocessingComponent } from './components/fileprocessing-components/efg-partnersweb-fileprocessing/efg-partnersweb-fileprocessing.component';
import { HomePageComponent } from './views/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [CheckLoggedInGuard,CheckCompanyGuard], 
    loadChildren: () => import('./views/home-page/home-page.module')
      .then(m => m.HomePageModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { 
    path: 'accountSearch',
    canActivate: [CheckLoggedInGuard],
    loadChildren: () => import('./views/account-search/account-search.module')
    .then(m => m.AccountSearchModule) 
  },
  {
    path: 'FileProcessing',
    loadChildren: () => import('./views/fileprocessing/fileprocessing.module')
    .then(m => m.FileprocessingModule) 
  },
  {path: 'Invoice/NewInvoice', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent]
