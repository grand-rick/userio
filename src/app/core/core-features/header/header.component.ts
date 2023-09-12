import { Component } from '@angular/core';
import { UsersService } from 'src/app/shared/data-access/services/users.service';
import { NewUser } from 'src/app/shared/data-access/types/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
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
    this.usersService.addNewUser(newUser);
  }
}
