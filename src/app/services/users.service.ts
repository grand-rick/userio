import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { APP_SERVICE_CONFIG } from '../core/AppConfig/appconfig.service';
import { AppConfig } from '../core/AppConfig/appconfig.interface';
import { Observable } from 'rxjs';
import { User, NewUser } from '../shared/types/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
    ) { }
    
    getUsers(): Observable<HttpEvent<User[]>> {
      const request = new HttpRequest(
        'GET',
        `${this.config.apiEndpoint}/users`,
        {
          reportProgress: true,
        });
      return this.http.request<User[]>(request);
  }

  addNewUser(newUser: NewUser): User {
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
    // const request = new HttpRequest(
    //   'POST',
    //   `${this.config.apiEndpoint}/users`,
    //   addedUser,
    //   {
    //     reportProgress: true
    //   });
    // return this.http.request<User>(request);
    return addedUser;
  }

  deleteUser(id: number): Observable<HttpEvent<User>> {
    const request = new HttpRequest(
      'DELETE',
      `${this.config.apiEndpoint}/users/${id}`,
      {
        reportProgress: true
      });
    return this.http.request<User>(request);
  }

  editUser(user: User): Observable<HttpEvent<User>> {
    const request = new HttpRequest(
      'PUT',
      `${this.config.apiEndpoint}/users/${user.id}`,
      user,
      {
        reportProgress: true
      });
    return this.http.request<User>(request);
  }
}

