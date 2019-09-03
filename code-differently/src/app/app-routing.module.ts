import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentLayoutComponent} from './core/layout/content-layout/content-layout.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
  path: '',
  component: ContentLayoutComponent,
  children: [
    {
      path: 'home',
      loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
