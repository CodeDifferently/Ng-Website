import { NgModule } from '@angular/core';

import { ProgramsComponent } from './page/programs.component';
import { ProgramsRoutingModule } from './programs.routing';

@NgModule({
    declarations: [
        ProgramsComponent,
    ],
    imports: [
        ProgramsRoutingModule
    ],
    exports: [],
    providers: [],
    entryComponents: []
})
export class ProgramsModule {}
