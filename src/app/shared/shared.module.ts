import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserModalModule } from './ui/add-user-modal/add-user-modal.module';
import { EditUserModalModule } from './ui/edit-user-modal/edit-user-modal.module';

const sharedModules = [
  CommonModule,
  AddUserModalModule,
  EditUserModalModule
]

@NgModule({
  declarations: [],
  imports: [],
  exports: [sharedModules]
})
export class SharedModule { }
