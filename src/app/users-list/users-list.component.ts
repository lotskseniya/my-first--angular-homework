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
  newUsersSearchResults: any;
  fields: string[] | null = null;
  value: string = "";
  addInputValue: string = '';
  currentIndex: number | null = null;
  counter: number = this.users.length;

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
    this.usersSearchResults = this.users.filter(({ name }) =>
      name.includes(this.value)
    );
  }

  countUsers() {
    this.counter = this.users.length;
  }

  deleteUser(index: number) {
    this.currentIndex = index;
    if (this.currentIndex >= 0) {
      if(this.usersSearchResults){
        this.usersSearchResults = this.users.filter(({ name }) =>
        name.includes(this.value)
      );
        this.newUsersSearchResults = this.usersSearchResults[this.currentIndex].id;
        this.users.splice((this.newUsersSearchResults - 1), 1);
        this.usersSearchResults.splice(this.currentIndex, 1);
      }
      else {
        this.users.splice(this.currentIndex, 1);
      }
      this.countUsers();
      this.currentIndex = null;
      return;
    }
  }
}
