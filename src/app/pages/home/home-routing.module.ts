
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
        redirectTo: 'company'
      },
      {
				path: 'folder',
        loadChildren: () => import('../../folder/folder.module').then(m => m.FolderPageModule),
        data: {pageName:'Inicio'}
      },
      {
				path: 'company',
        loadChildren: () => import('./company/company.module').then(m => m.CompanyPageModule),
        data: {pageName:'Empresa'}
      },
     {
       path:'influencer',
       loadChildren:() => import('./influencers/influencers.module').then(m => m.InfluencersPageModule),
       data: {pageName:'Influeniadores'}
     }

    ]
  },
  {
    path: 'influencers',
    loadChildren: () => import('./influencers/influencers.module').then( m => m.InfluencersPageModule)
  },
  {
    path: 'company',
    loadChildren: () => import('./company/company.module').then( m => m.CompanyPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
