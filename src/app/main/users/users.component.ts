import { Component, OnInit, inject } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';
import { UsersService } from 'src/app/services/users/users.service';
import { User } from 'src/app/shared/types/User';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private globals = inject(GlobalService);
  private usersService = inject(UsersService);
  
  allUsers = this.usersService.allUsers;

  page: number = 1;
  tableSize: number = 10;
  tableSizes: number[] = [5, 10, 15, 20];


  constructor() {}

  ngOnInit(): void {}

  showEditUserModal(editUserModal: HTMLDialogElement): void {
    editUserModal.showModal();
  }

  showDeleteUserModal(deleteUserModal: HTMLDialogElement): void {
    deleteUserModal.showModal();
  }


  editUser(user: User): void {
    this.usersService.allUsers.update((users: User[]) => users.map((u: User) => u.id === user.id && u.username === user.username ? user : u));
    this.globals.toaster.showSuccess('User updated successfully');

  }

  deleteUser(isDeleteUser: boolean, user: User): void {
    if (isDeleteUser) {
      this.usersService.allUsers.update((users: User[]) => users.filter((u: User) => u !== user));
      this.globals.toaster.showSuccess('User deleted successfully');
    }

    if ((this.page > 1) && (this.allUsers().length % this.tableSize === 1)) {
      this.page++;
    }
  }

  onTableDataChange(event: number): void {
    this.page = event;
  }

  onTableSizeChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.tableSize = +target.value;
    this.tableSize = +target?.value;
    this.page = 1;
  }

}
