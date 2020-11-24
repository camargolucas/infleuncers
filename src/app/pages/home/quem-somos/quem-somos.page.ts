import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MissaoModalPage } from 'src/app/modals/missao-modal/missao-modal.page';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.page.html',
  styleUrls: ['./quem-somos.page.scss'],
})
export class QuemSomosPage implements OnInit {

  constructor(private modal:ModalController, public cfgService:ConfigService) { }

  ngOnInit() {
  }

  get isMobile() {
    return window.innerWidth <= 575;
  }

 async openModal(strModal){
    const modal = await this.modal.create({
      component: MissaoModalPage,
      cssClass: this.isMobile?'modal-mobile':`modal-${strModal}`,
      componentProps: {
        'nomeModal': strModal,       
      },
      mode:"ios"

    })

    
    await modal.present();

  }
}
