import { Injectable, inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private spinner = inject(NgxSpinnerService);
  constructor() {}

  show(): void {
    this.spinner.show();
  }

  hide(): void {
    this.spinner.hide();
  }
}
