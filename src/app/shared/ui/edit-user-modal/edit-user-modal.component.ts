import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../data-access/types/User';

@Component({
  selector: 'edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.scss']
})
export class EditUserModalComponent {
  @Output() editUser = new EventEmitter();
  @Input({required: true}) user!: User;

  editUserForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() : void {
    this.editUserForm = this.fb.group({
      firstName: [this.user.name.firstname, [
        Validators.required
      ]],
      email: [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      role: [this.user.address.number, [
        Validators.required
      ]]
    });
  }

  onSubmit(): void {
    this.editUser.emit(this.editUserForm.value);
    this.editUserForm.reset();
  }
}
