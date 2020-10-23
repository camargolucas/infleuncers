import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PortfolioModalPage } from 'src/app/modals/portfolio-modal/portfolio-modal.page';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  async openModal(modalStr){
    const modal = await this.modalCtrl.create({
      component: PortfolioModalPage,
      componentProps: {
        nomeModal: modalStr
      },
      cssClass: `modal-${modalStr}`
    })

    modal.present();
  }

}
