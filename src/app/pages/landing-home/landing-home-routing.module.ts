import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingHomePage } from './landing-home.page';

const routes: Routes = [
  {
    path: '',
    component: LandingHomePage,
    children: [
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingHomePageRoutingModule { }
