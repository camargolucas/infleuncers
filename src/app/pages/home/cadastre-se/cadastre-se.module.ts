import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastreSePageRoutingModule } from './cadastre-se-routing.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { CadastreSePage } from './cadastre-se.page';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { TelefonePipe } from 'src/app/pipe/telefone.pipe';
import { NgxMaskModule } from 'ngx-mask';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastreSePageRoutingModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    
    
  ],
  declarations: [CadastreSePage]
})
export class CadastreSePageModule {}
