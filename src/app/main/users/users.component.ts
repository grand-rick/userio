import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { User } from 'src/app/shared/types/User';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  allUsers = this.usersService.allUsers;

  page: number = 1;
  tableSize: number = 10;
  tableSizes: number[] = [5, 10, 15, 20]; 


  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  showEditUserModal(editUserModal: HTMLDialogElement) {
    editUserModal.showModal();
  }

  showDeleteUserModal(deleteUserModal: HTMLDialogElement) {
    deleteUserModal.showModal();
  }


  editUser(user: User) {
    this.usersService.allUsers.update((users: User[]) => users.map((u: User) => u.id === user.id && u.username === user.username ? user : u));
  }

  deleteUser(user: User) {
    const isDeleteUser = window.confirm(`Are you sure you want to delete ${user.name.firstname}?`);
    if (isDeleteUser) {
      this.usersService.allUsers.update((users: User[]) => users.filter((u: User) => u !== user));
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
