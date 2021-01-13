import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
        nome: new FormControl('', Validators.required),
        email: new FormControl('', Validators.compose([Validators.pattern(
          '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'
        ), Validators.required])),
        telefone: new FormControl('', Validators.required),
        tipo: new FormControl('', Validators.required),
        mensagem: new FormControl('')
      })
    }else{
      this.formGroupDesktop = new FormGroup({
        nome: new FormControl('', Validators.required),
        email: new FormControl('', Validators.compose([Validators.pattern(
          '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'
        ), Validators.required])),
        telefone: new FormControl('', Validators.required),
        tipo: new FormControl('', Validators.required),
        mensagem: new FormControl('')
      })
    }
   
  }

  btnEnviar:boolean = false
  enviar(){
   

    this.btnEnviar = true;
    setTimeout(() => {
        this.btnEnviar = false;
    }, 2000);
    if(this.cfService.isMobile){

      let err = Object.keys(this.formgroup.controls).findIndex(element =>{
        return this.formgroup.controls[element].status === "INVALID"
      })

    
      if (err != -1){
        console.log('error')
      }else{
        console.log('pode seguir chefia')
      }


    }else{
      let err = Object.keys(this.formGroupDesktop.controls).findIndex(element =>{
        return this.formGroupDesktop.controls[element].status === "INVALID"
      })

    
      if (err != -1){
        console.log('error')
      }else{
        console.log('pode seguir chefia')
      }
     
      
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
