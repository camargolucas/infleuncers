import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-cadastre-se',
  templateUrl: './cadastre-se.page.html',
  styleUrls: ['./cadastre-se.page.scss'],
})
export class CadastreSePage implements OnInit {

  constructor(public cfService:ConfigService, private alertController:AlertController) { }
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
       
    }, 2000);
    if(this.cfService.isMobile){

      let err = Object.keys(this.formgroup.controls).findIndex(element =>{
        return this.formgroup.controls[element].status === "INVALID"
      })


    
      if (err != -1){
        this.presentAlert({           
          header: 'Faltou algo !',           
          message: 'Preencha todos os campos corretamente !',
          buttons: ['OK']
        })
        this.btnEnviar = false;
      }else{
        this.cfService.registerUser(this.formgroup.value).toPromise().then(res => {
          this.formgroup.reset()
          this.presentAlert({           
            header: 'Cadastrado',           
            message: 'Envio feito com sucesso',
            buttons: ['OK']
          })

          this.btnEnviar = false;
          
        })
        .catch(err =>{
          this.presentAlert({           
            header: 'Erro',           
            message: 'Houve um problema ao envio',
            buttons: ['OK']
          })

          this.btnEnviar = false;

        })
        
      }


    }else{
      let err = Object.keys(this.formGroupDesktop.controls).findIndex(element =>{
        return this.formGroupDesktop.controls[element].status === "INVALID"
      })
   
      if (err != -1){
        this.presentAlert({           
          header: 'Faltou algo !',           
          message: 'Preencha todos os campos corretamente !',
          buttons: ['OK']
        })

        this.btnEnviar = false;
      }else{

        this.cfService.registerUser(this.formGroupDesktop.value).toPromise().then(res => {
          this.presentAlert({           
            header: 'Cadastrado',           
            message: 'Envio feito com sucesso',
            buttons: ['OK']
          })
          this.formGroupDesktop.reset()          
          this.btnEnviar = false;
        })
        .catch(err =>{

          this.presentAlert({           
            header: 'Erro',           
            message: 'Houve um problema no envio',
            buttons: ['OK']
          })

          this.btnEnviar = false;

        })
       
      }
     
      
    }
  }


  async presentAlert(OBJ) {
    const alert = await this.alertController.create(OBJ);

    
    await alert.present();
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
