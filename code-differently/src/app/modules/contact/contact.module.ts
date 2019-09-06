import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact.routing.module';
import { ContactComponent } from './page/contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    ContactRoutingModule,
    CommonModule

  ]
})
export class ContactModule { }
