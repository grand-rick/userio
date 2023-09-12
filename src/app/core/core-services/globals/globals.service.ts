import { Injectable } from '@angular/core';
import { SpinnerService } from '../spinner/spinner.service';
import { ErrorService } from '../error/error.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  constructor(
    private spinnerService: SpinnerService,
    private errorService: ErrorService
  ) { }

  get spinner(): SpinnerService {
    return this.spinnerService;
  }

  get errors(): ErrorService {
    return this.errorService;
  }
}
