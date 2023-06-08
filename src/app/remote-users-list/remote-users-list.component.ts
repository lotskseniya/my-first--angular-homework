import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { RemoteUserInterface } from 'src/types';

@Component({
  selector: 'app-remote-users-list',
  templateUrl: './remote-users-list.component.html',
  styleUrls: ['./remote-users-list.component.css']
})
export class RemoteUsersListComponent implements OnInit {
 
  constructor(private userService: UserService) {}
  users: RemoteUserInterface[] = this.userService.users;
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
  }

  onSearch() {
    this.userService.searchFilms(this.value);
  }
}
