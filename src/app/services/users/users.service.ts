import { Inject, Injectable, WritableSignal, inject, signal } from '@angular/core';
import { HttpEvent, HttpRequest } from '@angular/common/http';
import { APP_SERVICE_CONFIG } from '../../core/AppConfig/appconfig.service';
import { AppConfig } from '../../core/AppConfig/appconfig.interface';
import { Observable } from 'rxjs';
import { User, NewUser } from '../../shared/types/User';
import { GlobalService } from '../global/global.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private globals: GlobalService = inject(GlobalService);
  
  getAllUsers: WritableSignal<User[]> = signal([]);
  filteredUsers: WritableSignal<User[]> = signal([]);

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {}

  searchUser(name: string): void {
    if (!name) {
      this.filteredUsers.set(this.getAllUsers());
      return;
    }
    const filteredUsers = this.filteredUsers().filter((user: User) => {
      const firstName = `${user.name.firstname}`;
      return firstName.toLowerCase().includes(name.toLowerCase());
    });
    this.filteredUsers.set(filteredUsers);
  }

  setAllUsers(users: User[]): void {
    this.getAllUsers.set(users);
    this.filteredUsers.set(users);
  }
    
  getUsers(): Observable<HttpEvent<User[]>> {
    const request = new HttpRequest(
      'GET',
      `${this.config.apiEndpoint}/users`,
      {
        reportProgress: true,
      });
    return this.globals.http.request<User[]>(request);
  }

  addNewUser(newUser: NewUser): Observable<User> {
    const addedUser: User = {
      id: 0,
      email: newUser.email,
      username: 'username',
      password: 'password',
      name: {
        firstname: newUser.firstName,
        lastname: 'lastname'
      },
      role: newUser.role,
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
    
    this.filteredUsers.update((user: User[]) => {
      return [addedUser, ...user]
    });

    delete addedUser.role;

    return this.globals.http.post<User>(this.config.apiEndpoint, addedUser);
  }

  
  editUser(user: User): Observable<User> {
    this.filteredUsers.update((users: User[]) => users.map((u: User) => u.id === user.id && u.username === user.username ? user : u));
    
    return this.globals.http.put<User>(this.config.apiEndpoint, user);
  }
  
  deleteUser(user: User): Observable<User> {
    this.filteredUsers.update((users: User[]) => users.filter((u: User) => u !== user));
    
    return this.globals.http.delete<User>(`${this.config.apiEndpoint}/${user.id}`);
  }
}

