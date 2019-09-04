import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramsComponent } from './page/programs.component';
import { PipelineComponent } from './page/pipeline/pipeline.component';

export const routes: Routes = [
 
  {
    path: '',
    component: ProgramsComponent
  },
  {
    path: 'pipeline',
    component: PipelineComponent
  },
  {
    path: 'platform',
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule {}
