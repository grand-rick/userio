import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isAddingUser = false;

  private route = Inject(ActivatedRoute);

  ngOnInit() { }

}
