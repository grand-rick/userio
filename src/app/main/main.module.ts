import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { UsersComponent } from './users/users.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

const components = [
  MainComponent,
  UsersComponent,
  HeaderComponent
]

const modules = [
  CommonModule,
  MainRoutingModule,
  SharedModule,
  NgxSpinnerModule,
  NgxPaginationModule,
  FormsModule
]

@NgModule({
  declarations: [components],
  imports: [modules]
})
export class MainModule { }
