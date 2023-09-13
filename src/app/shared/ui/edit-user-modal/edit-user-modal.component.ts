import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../types/User';

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
        Validators.required,
        Validators.minLength(2),
      ]],
      email: [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      role: [this.user.role, [
        Validators.required
      ]]
    });
  }

  handleError(controlName: string, errorName: string) {
    const control = this.editUserForm.controls[controlName];
    return (control.touched || control.dirty) && control.hasError(errorName);
  }

  onSubmit(): void {
    this.user.name.firstname = this.editUserForm.value.firstName;
    this.user.email = this.editUserForm.value.email;
    this.user.role = this.editUserForm.value.role;

    this.editUser.emit(this.user);
    this.editUserForm.reset();
  }
}
