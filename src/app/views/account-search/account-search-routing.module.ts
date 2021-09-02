import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSearchComponent } from './account-search.component';

const routes: Routes = [{ path: '', component: AccountSearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountSearchRoutingModule { }
