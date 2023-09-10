import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    
    getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.config.apiEndpoint);
  }
}

