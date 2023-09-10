import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  /**
   * TODO - Write logic to make the add user button disabled when the user is being added
   * 
   */
  isAddingUser = false;

  private route = Inject(ActivatedRoute);

  ngOnInit() { }

}
