import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminHomePageComponent } from './pages/admin-home-page/admin-home-page.component';
import { CreateCertificateComponent } from './pages/create-certificate/create-certificate.component';
import { ListOfUsersComponent } from './pages/list-of-users/list-of-users.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auth/login' },
  {
    path: 'auth', component: AuthComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  }, {
    path: 'pages', component: AuthComponent, children: [
      { path: 'admin-home', component: AdminHomePageComponent },
      { path: 'create-certificate', component: CreateCertificateComponent },
      { path: 'list-of-users', component: ListOfUsersComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
