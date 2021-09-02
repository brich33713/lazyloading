import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CheckLoggedInGuard } from './guards/check-logged-in.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: '',
  loadChildren: () => import('./views/account-search/account-search.module').then(m => m.AccountSearchModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent]
