import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteUserModalComponent } from './ui/delete-user-modal/delete-user-modal.component';
import { AddUserModalComponent } from './ui/add-user-modal/add-user-modal.component';
import { EditUserModalComponent } from './ui/edit-user-modal/edit-user-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const sharedUiComponents = [
  AddUserModalComponent,
  EditUserModalComponent,
  DeleteUserModalComponent
]

@NgModule({
  declarations: [sharedUiComponents],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [sharedUiComponents]
})
export class SharedModule { }
