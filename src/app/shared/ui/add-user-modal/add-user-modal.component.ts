import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NewUser } from '../../data-access/types/User';

@Component({
  selector: 'add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss']
})
export class AddUserModalComponent {
  @Output() addUserEvent = new EventEmitter();


  constructor(
    private fb: FormBuilder
  ) { }

  addUserForm = this.fb.group({
    firstName: ['', [
      Validators.required
    ]],
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    role: ['', [
      Validators.required
    ]]
  });

  onSubmit() {
    // console.log(this.addUserForm.value);
    this.addUserEvent.emit(this.addUserForm.value);
    this.addUserForm.reset();
  }
}
