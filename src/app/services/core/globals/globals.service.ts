import { Injectable } from '@angular/core';
import { SpinnerService } from '../spinner/spinner.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  constructor(
    private spinnerService: SpinnerService,
  ) { }

  get spinner(): SpinnerService {
    return this.spinnerService;
  }
}
