import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { UsersListComponent } from './users-list/users-list.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

const components = [
  MainComponent,
  UsersListComponent,
  HeaderComponent
]

const modules = [
  CommonModule,
  MainRoutingModule,
  NgxSpinnerModule,
  SharedModule,
  NgxPaginationModule,
]

@NgModule({
  declarations: [components],
  imports: [modules]
})
export class MainModule { }
