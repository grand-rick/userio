import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GlobalsService } from '../globals/globals.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  error$ = new Subject<string>();

  getError$ = this.error$.asObservable();
  constructor() { }

  addError(error: HttpErrorResponse): void {
    this.error$.next(error.message);
  }
}
