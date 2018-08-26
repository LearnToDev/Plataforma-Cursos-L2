import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './core/elementos/header/header.component';
import { FooterComponent } from './core/elementos/footer/footer.component';
import { MainComponent } from './core/elementos/main/main.component';
import { NotFoundComponent } from './core/elementos/not-found/not-found.component';
import { RegisterComponent } from './core/register/register.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: '', component: MainComponent },
 /* {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },*/
  {
    path: 'register',
    component: RegisterComponent
  },
 /* {
    path: 'dev-admin',
    component: AdminComponent
  },*/
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
   path: '*/*',
   pathMatch: 'full', redirectTo: 'not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HeaderComponent, MainComponent, FooterComponent, NotFoundComponent, RegisterComponent];
