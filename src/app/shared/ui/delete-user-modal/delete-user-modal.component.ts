import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'delete-user-modal',
  templateUrl: './delete-user-modal.component.html',
  styleUrls: ['./delete-user-modal.component.scss']
})
export class DeleteUserModalComponent implements OnInit {
  @Output() deleteUserEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {}

  onSubmit(deleteUser: boolean): void {
    this.deleteUserEvent.emit(deleteUser);
  }
}
