import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { GlobalService } from 'src/app/services/global/global.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  private globals: GlobalService = inject(GlobalService);

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(request, error))
    )
  }

  private handleError(request: HttpRequest<unknown>, error: HttpErrorResponse) {
    // Check if the error is from the client-side or the server-side
    if (error.status === 0) {
      // A client-side or network error occurred. 
      this.globals.toaster.showError('Network error occurred');
      this.globals.spinner.hide();
    } else {
      // Switch on the error status
      switch (error.status) {
        case 400: // Bad request
          this.globals.toaster.showError('Bad request');
          break;
        case 401: // Unauthorized
          this.globals.toaster.showError('Error 401: Unauthorized requested');
          break;
        case 403: // Forbidden
          this.globals.toaster.showError('Error 403: Forbidden request');
          break;
          case 404: // Not found
          this.globals.toaster.showError('Error 404: The URL you requested was Not found');
          switch (request.method) {
            case 'GET':
              this.globals.toaster.showError('Error 404: Could not fetch users');
              break;
              case 'POST':
              this.globals.toaster.showError('Error 404: Could not add user');
              break;
              case 'PUT':
              this.globals.toaster.showError('Error 404: Could not edit user');
              break;
              case 'DELETE':
              this.globals.toaster.showError('Error 404: Could not delete user');
              break;
          }
          break;
        case 500: // Internal server error
          this.globals.toaster.showError('Internal Server error');
          break;
        default:
          // Handle other errors here
          this.globals.toaster.showError(error.message);
        break;
      }
      this.globals.spinner.hide();
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(error.message));
  }
}
