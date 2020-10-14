
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'inicio'
      },     
      {
        path: 'inicio',
        loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'quem-somos',
        loadChildren: () => import('./quem-somos/quem-somos.module').then( m => m.QuemSomosPageModule)
      },
      {
        path: 'portfolio',
        loadChildren: () => import('./portfolio/portfolio.module').then( m => m.PortfolioPageModule)
      },
     

    ]
  },

  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
