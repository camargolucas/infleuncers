import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastreSePageRoutingModule } from './cadastre-se-routing.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { CadastreSePage } from './cadastre-se.page';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastreSePageRoutingModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule  
    
  ],
  declarations: [CadastreSePage]
})
export class CadastreSePageModule {}
