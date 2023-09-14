import {  HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, catchError, tap } from 'rxjs';
import { UsersService } from 'src/app/services/users/users.service';
import { User } from 'src/app/shared/types/User';
import { GlobalService } from '../services/global/global.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  users$ = this.usersService.getUsers();
  users: User[] = [];
  private subscription: Subscription = new Subscription();

  constructor(
    private usersService: UsersService,
    private globals: GlobalService
  ) {}

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

  addNewUser(user: User): void {
    this.users.unshift(user);
    this.globals.toaster.showSuccess('User added successfully');
  }
  
  editUser(user: User): void {
    const index = this.users.findIndex((u: User) => u.id === user.id && u.username === user.username);
    if (index !== -1) {
      this.users[index] = user;
    }
    this.globals.toaster.showSuccess('User updated successfully');
  }

  deleteUser(user: User): void {
    this.users = this.users.filter((u: User) => u !== user);
    this.globals.toaster.showSuccess('User deleted successfully');
  }

  


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
