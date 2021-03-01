import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.page.html',
  styleUrls: ['./portfolio-modal.page.scss'],
})
export class PortfolioModalPage implements OnInit {
  @Input() nomeModal:string;
  constructor(public cfService:ConfigService) { }

  modals = {
    digital:{
      titulo: 'Pegada Digital',
      img:'/assets/images/modals/pegada-digital.png',
      txt: `Quer aumentar o reconhecimento da sua marca? Lançar um novo produto? Se destacar dentro de novos nichos de mercado? A <b>INSPREAD</b> tem no seu portfólio o influenciador ideal para ajudar a desenvolver a estratégia de marketing digital e alavancar o seu negócio.`
    },
    consultoria:{
      titulo: 'Consultoria Sob Medida',
      img:'/assets/images/modals/consultoria.png',
      txt: `A <b>INSPREAD</b> é a maior empresa de consultoria personalizada de marketing de influência do mercado. Avaliamos sua demanda, traçamos a estratégia de marketing digital compatibilizando o seu propósito com o nosso portfólio de influenciadores, e escalamos o seu negócio. Conheça nosso portfólio de influenciadores digitais.`
    },
    campanhas:{
      titulo: 'Campanhas Completas',
      img:'/assets/images/modals/campanhas.png',
      txt: `Somos a vitrine tecnológica do seu negócio! Unimos a expertise do marketing de influência ao maior e mais variado portfólio de influenciadores digitais do Brasil para divulgar e impulsionar sua marca, produtos e serviços. Contate-nos.`
    }
  }


  ngOnInit() {
  }

}
