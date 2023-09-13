import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { EditUserModalModule } from 'src/app/shared/ui/edit-user-modal/edit-user-modal.module';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NgxSpinnerModule,
    EditUserModalModule,
    HeaderModule
  ]
})
export class UsersModule { }
