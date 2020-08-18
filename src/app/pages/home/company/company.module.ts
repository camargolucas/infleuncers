import { ToolbarHomePlatformModule } from './../../../components/toolbar-home-platform/toolbar-home-platform.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyPageRoutingModule } from './company-routing.module';

import { CompanyPage } from './company.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyPageRoutingModule,
    ToolbarHomePlatformModule
  ],
  declarations: [CompanyPage]
})
export class CompanyPageModule {}
