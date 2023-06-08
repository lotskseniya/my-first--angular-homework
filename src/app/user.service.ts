import { Injectable } from '@angular/core';
import { RemoteUserInterface } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users: RemoteUserInterface[] = [];
  
  async getUsers() {
    const rawData = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await rawData.json();
    this.users = data;
    console.log(data, 'users from server');
  }

  async searchFilms(filmName: string) {
    const json = await fetch(`${this.url}${filmName}`, this.options);
    const responseData = await json.json();
  
    if (responseData.d) {
      this.films = responseData.d;
    }
    console.log(responseData)
  }
}
