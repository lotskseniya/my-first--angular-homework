import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { RemoteUsersListComponent } from './remote-users-list/remote-users-list.component';
import { RemoteUserItemComponent } from './remote-user-item/remote-user-item.component';
import { MenuComponent } from './menu/menu.component';
import { SkillsCounterComponent } from './skills-counter/skills-counter.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SkillsCounterComponent,
    UsersListComponent,
    UserItemComponent,
    RemoteUsersListComponent,
    RemoteUserItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
