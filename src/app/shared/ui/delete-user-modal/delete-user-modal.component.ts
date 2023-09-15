import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../types/User';

@Component({
  selector: 'delete-user-modal',
  templateUrl: './delete-user-modal.component.html',
  styleUrls: ['./delete-user-modal.component.scss']
})
export class DeleteUserModalComponent implements OnInit {
  @Output() deleteUserEvent = new EventEmitter<boolean>();
  @Input({required: true}) user!: User;
  constructor() { }

  ngOnInit(): void {}

  onSubmit(deleteUser: boolean): void {
    this.deleteUserEvent.emit(deleteUser);
  }
}
