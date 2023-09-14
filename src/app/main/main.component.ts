import {  HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Observable, Subscription, catchError, tap } from 'rxjs';
import { UsersService } from 'src/app/services/users/users.service';
import { User } from 'src/app/shared/types/User';
import { GlobalService } from '../services/global/global.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  private globals: GlobalService = inject(GlobalService);
  private usersService: UsersService = inject(UsersService);

  users$: Observable<HttpEvent<User[]>> = this.usersService.getUsers();
  users: User[] = [];
  private subscription: Subscription = new Subscription();

  constructor() {}

  ngOnInit(): void {
    this.globals.spinner.show();
    this.getUsers();
  }

  getUsers(): void {
    this.subscription = this.users$.pipe(
      tap((event: HttpEvent<User[]>) => {
        if (event.type === HttpEventType.Response) {
          this.users = event.body as User[];
          this.addUserRoles();
          this.usersService.setAllUsers(this.users);
          this.globals.spinner.hide();
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.globals.spinner.hide();
        this.globals.toaster.showError(error.message);
        throw error;
      })
    ).subscribe();
  }

  addUserRoles(): void {
    const roles = ['Admin', 'User'];
    const randomRole = () => roles[Math.floor(Math.random() * roles.length)];
    this.users.forEach((user: User) => {
      user.role = randomRole();
    });
  }

  searchUser(name: string): void {
    if (!name) {
      this.getUsers();
      return;
    }
    const filteredUsers = this.users.filter((user: User) => {
      const firstName = `${user.name.firstname}`;
      return firstName.toLowerCase().includes(name.toLowerCase());
    });
    this.usersService.filteredUsers.set(filteredUsers);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
