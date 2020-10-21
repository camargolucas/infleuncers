import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortfolioModalPageRoutingModule } from './portfolio-modal-routing.module';

import { PortfolioModalPage } from './portfolio-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortfolioModalPageRoutingModule
  ],
  declarations: [PortfolioModalPage]
})
export class PortfolioModalPageModule {}
