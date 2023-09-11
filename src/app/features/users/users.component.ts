import { Component, OnInit, Renderer2 } from '@angular/core';
import { UsersService } from 'src/app/shared/data-access/services/users.service';
import { User } from 'src/app/shared/data-access/types/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$ = this.usersService.getUsers();

  constructor(private usersService: UsersService, private renderer: Renderer2) {}

  // displayOptions(): void {
  //   this.renderer.addClass(dropdownContent, 'block');
  // }

  ngOnInit(): void {
    const dropdown = document.querySelector('.dropdown');

    // dropdown?.addEventListener('click', () => {
    //   const dropdownContent = document.querySelector('.dropdown-content');
    //   dropdownContent?.classList.toggle('block');
    //   dropdownContent?.classList.toggle('hidden');
    // });
    
  }
  
  editUser(user: User): void {}

  deleteUser(user: User): void {}

}
