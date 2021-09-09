import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishSearchFormComponent } from './components/search-form-components/dish-search-form/dish-search-form.component';
import { LoginComponent } from './components/login/login.component';
import { VivintSearchFormComponent } from './components/search-form-components/vivint-search-form/vivint-search-form.component';
import { CheckLoggedInGuard } from './guards/check-logged-in.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'searchAccount',
  loadChildren: () => import('./views/account-search/account-search.module').then(m => m.AccountSearchModule) },
  {path: 'test', component: VivintSearchFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent]
