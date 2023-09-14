import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss']
})
export class AddUserModalComponent implements OnInit {
  @Output() addUserEvent = new EventEmitter();


  constructor(
    private fb: FormBuilder
  ) { }

  addUserForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      firstName: ['', [
        Validators.required,
        Validators.minLength(2)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      role: ['', [
        Validators.required
      ]]
    });
  }

  handleError(controlName: string, errorName: string) {
    const control = this.addUserForm.controls[controlName];
    return (control.touched || control.dirty) && control.hasError(errorName);
  }

  onSubmit() {
    // console.log(this.addUserForm.value);
    this.addUserEvent.emit(this.addUserForm.value);
    this.addUserForm.reset();
  }
}
