import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingHomePageRoutingModule } from './landing-home-routing.module';

import { LandingHomePage } from './landing-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingHomePageRoutingModule
  ],
  declarations: [LandingHomePage]
})
export class LandingHomePageModule {}
