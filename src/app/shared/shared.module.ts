import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserModalModule } from './ui/add-user-modal/add-user-modal.module';

const sharedModules = [
  CommonModule,
  AddUserModalModule
]

@NgModule({
  declarations: [],
  imports: [],
  exports: [sharedModules]
})
export class SharedModule { }
