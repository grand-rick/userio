import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserModalComponent } from './add-user-modal.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddUserModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AddUserModalComponent
  ]
})
export class AddUserModalModule { }
