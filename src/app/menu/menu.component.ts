import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  menu: { name: string, src: string }[] = [
    {
      name: 'Home',
      src: `./icons/Home.png`,
    },
    {
      name: 'Explore',
      src: `./icons/Home.png`,
    },
    {
      name: 'Todo-Lists',
      src: './icons/Home.png',
    },
    {
      name: 'Users',
      src: `./icons/Home.png`,
    },
  ];
}
