import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './core/elementos/header/header.component';
import { FooterComponent } from './core/elementos/footer/footer.component';
import { MainComponent } from './core/elementos/main/main.component';
import { NotFoundComponent } from './core/elementos/not-found/not-found.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'main', component: MainComponent },
  { path: 'footer', component: FooterComponent },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    pathMatch: 'full', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HeaderComponent, MainComponent, FooterComponent, NotFoundComponent];
