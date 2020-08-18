import { ToolbarHomePlatformModule } from './../../../components/toolbar-home-platform/toolbar-home-platform.module';
import { ToolbarHomePlatformComponent } from './../../../components/toolbar-home-platform/toolbar-home-platform.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfluencersPageRoutingModule } from './influencers-routing.module';

import { InfluencersPage } from './influencers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfluencersPageRoutingModule,
    ToolbarHomePlatformModule
  ],
  declarations: [InfluencersPage]
})
export class InfluencersPageModule {}
