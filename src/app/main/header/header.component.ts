import { Component, EventEmitter, Output } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { NewUser } from 'src/app/shared/types/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() addUserEvent = new EventEmitter();
  /**
   * TODO - Write logic to make the add user button disabled when the user is being added
   * 
   */

  constructor(private usersService: UsersService) { }

  ngOnInit() { }

  showAddUserModal(showAddUserModal: HTMLDialogElement) {
    showAddUserModal.showModal();
  }

  addNewUser(newUser: NewUser) {
    const addedUser = this.usersService.addNewUser(newUser);
    this.addUserEvent.emit(addedUser);
  }
}
