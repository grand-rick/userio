import { Component } from '@angular/core';
import { UsersService } from 'src/app/shared/data-access/services/users.service';
import { User } from 'src/app/shared/data-access/types/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users$ = this.usersService.getUsers();

  constructor(private usersService: UsersService) {}

  editUser(user: User): void {}

  deleteUser(user: User): void {}

}
