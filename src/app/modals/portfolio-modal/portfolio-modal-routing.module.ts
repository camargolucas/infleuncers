import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioModalPage } from './portfolio-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PortfolioModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioModalPageRoutingModule {}
