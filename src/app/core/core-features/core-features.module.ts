import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';

const coreFeatures = [
    CommonModule,
    HeaderModule,
];

@NgModule({
  declarations: [],
  imports: [coreFeatures],
  exports: [coreFeatures]
})
export class CoreFeaturesModule { }
