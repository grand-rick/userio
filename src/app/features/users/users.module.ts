import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';

import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NgxSpinnerModule
  ]
})
export class UsersModule { }
