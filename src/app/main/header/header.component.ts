import { Component, inject } from '@angular/core';
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

  searchItem: string = '';

  constructor() { }

  showAddUserModal(showAddUserModal: HTMLDialogElement): void {
    showAddUserModal.showModal();
  }

  addNewUser(newUser: NewUser): void {
    if (!newUser.firstName || !newUser.role || !newUser.email) return;

    const addedUser: User = {
      id: 0,
      email: newUser.email,
      username: 'username',
      password: 'password',
      name: {
        firstname: newUser.firstName,
        lastname: 'lastname'
      },
      phone: 'phone',
      __v: 0,
      address: {
        geolocation: {
          lat: '0',
          long: '0'
        },
        city: 'string',
        street: 'string',
        number: 0,
        zipcode: 'string'
      }
    }

    // delete addedUser.role;
    this.usersService.addNewUser(addedUser).subscribe((user: User) => {
      if (user.id) {
        this.usersService.filteredUsers.update((user: User[]) => {
          addedUser.role = newUser.role;
          return [addedUser, ...user]
        });
        this.globals.toaster.showSuccess('User added successfully');
      }
    });
  }

  searchUser(name: string): void {
    this.usersService.searchUser(name);
  }
}
