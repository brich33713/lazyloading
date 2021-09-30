import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileprocessingRoutingModule } from './fileprocessing-routing.module';
import { FileProcessingLayoutComponents } from 'src/app/layers/repositories/FileProcessing.repository';


@NgModule({
  declarations: [FileProcessingLayoutComponents],
  imports: [
    CommonModule,
    FileprocessingRoutingModule
  ],
  exports: [FileProcessingLayoutComponents]
})
export class FileprocessingModule { }
