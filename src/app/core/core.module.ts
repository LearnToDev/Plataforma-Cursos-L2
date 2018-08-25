import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementosComponent } from './elementos/elementos.component';
import { HeaderComponent } from './elementos/header/header.component';
import { MainComponent } from './elementos/main/main.component';
import { FooterComponent } from './elementos/footer/footer.component';
import { NotFoundComponent } from './elementos/not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ElementosComponent, HeaderComponent, MainComponent, FooterComponent, NotFoundComponent],
  exports: [ElementosComponent]
})
export class CoreModule { }
