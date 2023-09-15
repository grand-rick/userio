import { Component, EventEmitter, Output, inject } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';
import { UsersService } from 'src/app/services/users/users.service';
import { NewUser, User } from 'src/app/shared/types/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private globals: GlobalService = inject(GlobalService);
  private usersService: UsersService = inject(UsersService);

  @Output() searchUserEvent: EventEmitter<string> = new EventEmitter<string>();

  searchItem: string = '';

  constructor() { }

  showAddUserModal(showAddUserModal: HTMLDialogElement): void {
    showAddUserModal.showModal();
  }

  addNewUser(newUser: NewUser): void {
    if (!newUser.firstName || !newUser.role || !newUser.email) return;
    
    const addedUser = this.usersService.addNewUser(newUser);
    this.usersService.getAllUsers.update((user: User[]) => [addedUser, ...user]);
    this.globals.toaster.showSuccess('User added successfully');
  }

  searchUser(name: string): void {
    this.searchUserEvent.emit(name);
  }
}
