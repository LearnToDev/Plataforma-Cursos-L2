import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementosComponent } from './elementos/elementos.component';
import { HeaderComponent } from './elementos/header/header.component';
import { MainComponent } from './elementos/main/main.component';
import { FooterComponent } from './elementos/footer/footer.component';
import { NotFoundComponent } from './elementos/not-found/not-found.component';
import { LoginComponent } from './elementos/login/login.component';
import { LogoutComponent } from './elementos/logout/logout.component';
import { DevAdminComponent } from './dev-admin/dev-admin.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ElementosComponent, HeaderComponent, MainComponent, FooterComponent,
    NotFoundComponent, LoginComponent, LogoutComponent, DevAdminComponent],
  exports: [ElementosComponent]
})
export class CoreModule { }
