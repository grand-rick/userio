import { Injectable, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  private toaster = inject(ToastrService);

  constructor() { }

  showSuccess(message: string, title?: string): void {
    this.toaster.success(message, title);
  }

  showError(message: string, title?: string): void {
    this.toaster.error(message, title, {
      timeOut: 3000
    });
  }

  showInfo(message: string, title?: string): void {
    this.toaster.info(message, title);
  }

  showWarning(message: string, title?: string): void {
    this.toaster.warning(message, title);
  }
}
