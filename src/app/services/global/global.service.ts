import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from '../core/spinner/spinner.service';
import { ToasterService } from '../core/toaster/toaster.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public http: HttpClient = inject(HttpClient);
  public router: Router = inject(Router);
  public spinner: SpinnerService = inject(SpinnerService);
  public toaster: ToasterService = inject(ToasterService);

  constructor() { }
}
