import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss']
})
export class AddUserModalComponent {
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

  addUser() {
    console.log(this.addUserForm.value);
  }
}
