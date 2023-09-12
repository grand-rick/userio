import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const components = [
  HeaderComponent
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [components]
})
export class HeaderModule { }
