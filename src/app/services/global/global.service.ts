import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from '../core/spinner/spinner.service';
import { ToasterService } from '../core/toaster/toaster.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    public http: HttpClient,
    public router: Router,
    public spinner: SpinnerService,
    public toaster: ToasterService
  ) { }
}
