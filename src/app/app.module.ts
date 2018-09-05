import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { FeedComponent } from './feed/feed.component';
import { MessageComponent } from './message/message.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { UserComponent } from './user/user.component';

import { ChatService } from './services/chat.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/authGuard.service';
import { UserResolverService } from './services/userResolver.service';

import { appRoutes } from '../routes';
import { environment } from '../environments/environment';

import { ReactiveFormsModule  } from '@angular/forms';

//import { AngularFireOfflineModule } from 'angularfire2-offline';

@NgModule({
  declarations: [
    AppComponent,
    ChatroomComponent,
    FeedComponent,
    MessageComponent,
    LoginFormComponent,
    SignupFormComponent,
    NavbarComponent,
    UserListComponent,
    UserItemComponent,
    ChatFormComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { useHash: false }),
    FormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    //AngularFireOfflineModule,
  ],
  providers: [AuthService, ChatService, UserService, AuthGuardService, UserResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
