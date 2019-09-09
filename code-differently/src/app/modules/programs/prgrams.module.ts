import { NgModule } from '@angular/core';

import { ProgramsComponent } from './page/programs.component';
import { ProgramsRoutingModule } from './programs.routing';
import { PipelineComponent } from './page/pipeline/pipeline.component';
import { PlatformComponent } from './page/platform/platform.component';
import { ProfessionalComponent } from './page/professional/professional.component';
import { PayPalComponent } from '../../shared/components/paypal/paypal.component';

@NgModule({
    declarations: [
        ProgramsComponent,
        PipelineComponent,
        PlatformComponent,
        ProfessionalComponent,
        PayPalComponent
    ],
    imports: [
        ProgramsRoutingModule
    ],
    exports: [],
    providers: [],
    entryComponents: []
})
export class ProgramsModule {}
