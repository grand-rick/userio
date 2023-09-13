import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { UsersListComponent } from './users-list/users-list.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { EditUserModalModule } from 'src/app/shared/ui/edit-user-modal/edit-user-modal.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';

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
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    modules
  ]
})
export class MainModule { }
