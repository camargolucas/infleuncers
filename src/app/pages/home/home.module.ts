import { ToolbarHomePlatformModule } from './../../components/toolbar-home-platform/toolbar-home-platform.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonSlide, IonSlides } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    
  ],
  providers:[
    IonSlides
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
