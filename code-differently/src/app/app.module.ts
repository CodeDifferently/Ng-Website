import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './core/layout/nav/nav.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { ContentLayoutComponent }  from './core/layout/content-layout/content-layout.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { HeaderCarouselComponent } from './shared/components/header-carousel/header-carousel.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCarouselComponent,
    FooterComponent,
    NavComponent,
    ContentLayoutComponent,
    HeaderComponent 
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
