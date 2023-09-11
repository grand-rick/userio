import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { APP_SERVICE_CONFIG } from '../../../core/AppConfig/appconfig.service';
import { AppConfig } from '../../../core/AppConfig/appconfig.interface';
import { Observable } from 'rxjs';
import { User } from '../types/User';

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
}

