import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramsComponent } from './page/programs.component';
import { PipelineComponent } from './page/pipeline/pipeline.component';
import { PlatformComponent } from './page/platform/platform.component';
import { ProfessionalComponent } from './page/professional/professional.component';

export const routes: Routes = [
 
  {
    path: '',
    component: ProgramsComponent
  },
  // {
  //   path: 'pipeline',
  //   component: PipelineComponent
  // },
  // {
  //   path: 'platform',
  //   component: PlatformComponent
  // },
  // {
  //   path: 'professional',
  //   component: ProfessionalComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule {}
