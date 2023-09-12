import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserModalComponent } from './edit-user-modal.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditUserModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    EditUserModalComponent
  ]
})
export class EditUserModalModule { }
