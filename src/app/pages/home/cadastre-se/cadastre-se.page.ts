import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-cadastre-se',
  templateUrl: './cadastre-se.page.html',
  styleUrls: ['./cadastre-se.page.scss'],
})
export class CadastreSePage implements OnInit {

  constructor(public cfService:ConfigService) { }
  radioButton = 'influencer'
  formgroup:FormGroup
  formGroupDesktop:FormGroup
  ngOnInit() {

    if (this.cfService.isMobile){
      this.formgroup = new FormGroup({
        nome: new FormControl(''),
        email: new FormControl(''),
        telefone: new FormControl(''),
        tipo: new FormControl(''),
        mensagem: new FormControl('')
      })
    }else{
      this.formGroupDesktop = new FormGroup({
        nome: new FormControl(''),
        email: new FormControl(''),
        telefone: new FormControl(''),
        tipo: new FormControl(''),
        mensagem: new FormControl('')
      })
    }
   
  }


  formatMSISDN(msisdn) {
    if (msisdn != null && msisdn != undefined) {
      if (msisdn.length == 11) {
        const ddd = msisdn.substring(0, 2);
        const parte1 = msisdn.substring(2, 7);
        const parte2 = msisdn.substring(7, 11);
        return `(${ddd}) ${parte1} - ${parte2}`;
      } else {
        const ddd = msisdn.substring(0, 2);
        const parte1 = msisdn.substring(2, 6);
        const parte2 = msisdn.substring(7, 10);
        return `(${ddd}) ${parte1} - ${parte2}`;
      }
    } else {
      return "";
    }
  }

}
