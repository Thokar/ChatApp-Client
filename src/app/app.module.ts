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

import { ChatService } from './services/chat.service';
import { AuthService } from './services/auth.service';
import { appRoutes } from '../routes';
import { environment } from '../environments/environment';

//import { AngularFireOfflineModule } from 'angularfire2-offline';

// Deploying Your Angular Application To Azure
// https://dotnetthoughts.net/deploying-your-angular-app-to-azure/

// hosting in azure
// https://www.newventuresoftware.com/blog/deploying-angular-4-cli-apps-to-iis-on-azure

// Understanding the Angular CLI Workspace File
// https://nitayneeman.com/posts/understanding-the-angular-cli-workspace-file/

// deploy to azure
// https://myview.rahulnivi.net/build-deploy-angular-app-azure-via-kuduscriptgithub/

// Angular doku: 
// https://github.com/angular/angularfire2/blob/master/docs/version-5-upgrade.md

// die richtige node version
// https://stackoverflow.com/questions/49764571/how-to-upgrade-nodejs-version-on-azure

// Angular is a static website!
// https://stackoverflow.com/questions/45677959/how-to-run-ng-serve-command-in-kudu-console-to-make-azure-serve-my-angular-web

// see https://github.com/wesdoyle/base-chat/tree/master/src/assets
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
    ChatFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    //AngularFireOfflineModule,
  ],
  providers: [AuthService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
