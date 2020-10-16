import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MissaoModalPage } from 'src/app/modals/missao-modal/missao-modal.page';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.page.html',
  styleUrls: ['./quem-somos.page.scss'],
})
export class QuemSomosPage implements OnInit {

  constructor(private modal:ModalController) { }

  ngOnInit() {
  }


 async openModal(strModal){
    const modal = await this.modal.create({
      component: MissaoModalPage,
      cssClass: `modal-${strModal}`,
      componentProps: {
        'nomeModal': strModal,       
      }
    })

    
    await modal.present();

  }
}
