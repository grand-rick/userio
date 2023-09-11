import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, filter, tap } from 'rxjs';
import { User } from 'src/app/shared/data-access/types/User';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  @Input({required: true}) users: User[] = [];
  @Input() test!: Observable<HttpEvent<User[]>>;

  constructor() {}

  ngOnInit(): void {}

  // getUsers(response: HttpEvent<User[]>): void {
  //   this.test.pipe(filter((event: HttpEvent<User[]>) => event.type === HttpEventType.Response), tap((event: HttpEvent<User[]>) => {
  //     this.users = event.body as User[];
  //   }));
  // }

}
