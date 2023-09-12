import { HttpEvent } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/shared/data-access/services/users.service';
import { User } from 'src/app/shared/data-access/types/User';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  @Input({required: true}) users: User[] = [];
  @Input() test!: Observable<HttpEvent<User[]>>;

  constructor(
    private usersService: UsersService
  ) {}

  ngOnInit(): void {}

  // getUsers(response: HttpEvent<User[]>): void {
  //   this.test.pipe(filter((event: HttpEvent<User[]>) => event.type === HttpEventType.Response), tap((event: HttpEvent<User[]>) => {
  //     this.users = event.body as User[];
  //   }));
  // }

  showEditUserModal(showAddUserModal: HTMLDialogElement) {
    showAddUserModal.showModal();
  }

  editUser(user: User) {
    this.usersService.editUser(user);
    console.log(user);
  }

}
