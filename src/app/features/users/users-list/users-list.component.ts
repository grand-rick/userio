import { HttpEvent, HttpEventType } from '@angular/common/http';
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

  constructor() {}

  ngOnInit(): void {}

}
