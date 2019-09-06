import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about.routing.module';
import { AboutComponent } from './page/about.component';
import { LightBoxComponent } from '../../shared/components/lightbox-youtube/lightbox-youtube.component';

@NgModule({
  declarations: [
    AboutComponent,
  LightBoxComponent
],
  imports: [
    AboutRoutingModule,
    CommonModule

  ]
})
export class AboutModule { }
