import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissaoModalPage } from './missao-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MissaoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissaoModalPageRoutingModule {}
