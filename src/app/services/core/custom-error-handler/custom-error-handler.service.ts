import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class CustomErrorHandler implements ErrorHandler {

  constructor() {}

  handleError(error: unknown): void {
    // throw new Error('Method not implemented.');
    console.warn('Caught by Custom Error Handler', error);
  }
  // error$ = new Subject<string>();

  // getError$ = this.error$.asObservable();
  // constructor() { }

  // addError(error: HttpErrorResponse): void {
  //   this.error$.next(error.message);
  // }
}
