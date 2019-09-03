import { NgModule } from '@angular/core';

import { HomeComponent } from './page/home.component';
import { HomeRoutingModule } from './home.routing';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
    declarations: [
        HomeComponent,
        GalleryComponent
    ],
    imports: [
        
        HomeRoutingModule
    ],
    exports: [],
    providers: [],
    entryComponents: []
})
export class HomeModule {}
