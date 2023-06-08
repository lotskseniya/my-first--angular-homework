import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { RemoteUserInterface } from 'src/types';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
 
  constructor(private userService: UserService) {}
  users: RemoteUserInterface[] = this.userService.users;
  usersSearchResults: typeof this.users = [];
  fields: string[] | null = null;
  value: string = "";

  formData: RemoteUserInterface | any = {
    name: "",
    email: "",
    username: "",
    website: "",
    phone: "",
    id: 0,
    address: "",
    company: ""
  };

  ngOnInit() {
    this.userService.getUsers().then(() => {
      this.users = this.userService.users;
      console.log(this.userService.users, "!!!");
      this.fields = Object.keys(this.userService.users[0]);
    })
  }

  onInput(e: any) {
    this.value = e.target.value;
    localStorage.setItem('value', this.value);
    this.onSearch();
  }

  onSearch() {
    // this.userService.searchUsers(this.value);

    this.usersSearchResults = this.users.filter(({ name }) =>
      name.includes(this.value)
    );
    console.log(this.usersSearchResults)

  }
}
