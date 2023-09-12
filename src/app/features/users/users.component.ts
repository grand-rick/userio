import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription, catchError, of } from 'rxjs';
import { GlobalsService } from 'src/app/core/core-services/globals/globals.service';
import { UsersService } from 'src/app/shared/data-access/services/users.service';
import { User } from 'src/app/shared/data-access/types/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  getError$ = this.globals.errors.getError$;
  users$ = this.usersService.getUsers().pipe(
    catchError((err: HttpErrorResponse) => {
      this.globals.errors.addError(err);
      // this.globals.toast.error(err.message);
      return of<HttpEvent<User[]>>([] as unknown as HttpEvent<User[]>);
    })
  );
  users: User[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private usersService: UsersService, private renderer: Renderer2, private globals: GlobalsService) {}

  // displayOptions(): void {
  //   this.renderer.addClass(dropdownContent, 'block');
  // }

  ngOnInit(): void {
    this.globals.spinner.show();
    this.subscription = this.users$.subscribe((event: HttpEvent<User[]>) => {
      switch (event.type) {
        // case HttpEventType.Sent:
        //   console.log('Request sent!');
        //   break;
        // case HttpEventType.ResponseHeader:
        //   console.log('Response received!');
        //   break;
        // case HttpEventType.DownloadProgress:
        //   console.log('Downloaded!');
        //   break;
        case HttpEventType.Response:
          this.users = event.body as User[];
          this.addUserRoles();
          if (!event.body || this.users.length === 0) {
          }
          this.globals.spinner.hide();
          break;
        default:
          break;
      }
    });
    // const dropdown = document.querySelector('.dropdown');

    // dropdown?.addEventListener('click', () => {
    //   const dropdownContent = document.querySelector('.dropdown-content');
    //   dropdownContent?.classList.toggle('block');
    //   dropdownContent?.classList.toggle('hidden');
    // });
    
  }

  addUserRoles(): void {
    const roles = ['Admin', 'User'];
    const randomRole = () => roles[Math.floor(Math.random() * roles.length)];
    this.users.forEach((user: User) => {
      user.role = randomRole();
    });
  }

  addNewUser(user: User): void {
    this.users.unshift(user);
  }
  
  editUser(user: User): void {
    const index = this.users.findIndex((u: User) => u.id === user.id && u.username === user.username);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  deleteUser(user: User): void {
    this.users = this.users.filter((u: User) => u !== user);
  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
