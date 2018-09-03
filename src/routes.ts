import { Routes } from '@angular/router';
import { SignupFormComponent } from './app/signup-form/signup-form.component';
import { LoginFormComponent } from './app/login-form/login-form.component';
import { ChatroomComponent } from './app/chatroom/chatroom.component';
import { UserComponent } from './app/user/user.component';
import { AuthGuardService } from './app/services/authGuard.service';
import { UserResolverService } from './app/services/userResolver.service';

export const appRoutes: Routes = [
    { path: 'signup', component: SignupFormComponent, canActivate: [AuthGuardService]},
    { path: 'login', component: LoginFormComponent, canActivate: [AuthGuardService] }, 
    { path: 'chat', component: ChatroomComponent, canActivate: [AuthGuardService] }, 
    { path: 'user', component: UserComponent,  resolve: { data: UserResolverService}},
    { path: '', redirectTo: '/login', pathMatch: 'full'},
];

