import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toaster: ToastrService) { }

  showSuccess(message: string, title?: string) {
    this.toaster.success(message, title);
  }

  showError(message: string, title?: string) {
    this.toaster.error(message, title, {
      timeOut: 3000
    });
  }

  showInfo(message: string, title?: string) {
    this.toaster.info(message, title);
  }

  showWarning(message: string, title?: string) {
    this.toaster.warning(message, title);
  }
}
