import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileProcessingComponent } from './fileprocessing.component';

const routes: Routes = [{ path: '', component: FileProcessingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileprocessingRoutingModule { }
