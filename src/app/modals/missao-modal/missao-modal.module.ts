import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MissaoModalPageRoutingModule } from './missao-modal-routing.module';

import { MissaoModalPage } from './missao-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MissaoModalPageRoutingModule
  ],
  declarations: [MissaoModalPage]
})
export class MissaoModalPageModule {}
