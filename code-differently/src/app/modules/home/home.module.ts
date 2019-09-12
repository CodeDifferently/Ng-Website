import { NgModule } from '@angular/core';

import { HomeComponent } from './page/home.component';
import { HomeRoutingModule } from './home.routing';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactBoxComponent } from '../../shared/components/contact-box/contact-box.component';

@NgModule({
    declarations: [
        HomeComponent,
        GalleryComponent,
        TestimonialsComponent,
        ContactBoxComponent
    ],
    imports: [
        
        HomeRoutingModule
    ],
    exports: [],
    providers: [],
    entryComponents: []
})
export class HomeModule {}
