import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.page.html',
  styleUrls: ['./portfolio-modal.page.scss'],
})
export class PortfolioModalPage implements OnInit {
  @Input() nomeModal:string;
  constructor() { }

  modals = {
    missao:{
      titulo: 'Pegada Digital',
      img:'/assets/images/modals/pegada-digital.png',
      txt: `Ser agente de <b>transformação</b> digital de empresas e pessoas no Brasil,
      <b>superando</b> barreiras físicas e
      <b>alavancando</b> a comunicação e as vendas dos nossos clientes através da 
      expertise de uma plataforma de marketplace de alta
      tecnologia, que se propõe a <b>conectar</ib> empresas e influenciadores digitais
      cadastrados em todo o país com o objetivo
      de <b>divulgar</b> digitalmente marcas, produtos e serviços.`
    },
    valores:{
      titulo: 'Consultoria Sobre Medida',
      img:'/assets/images/modals/consultoria.png',
      txt: `Ética, Integridade, Transparência, Respeito, Compromisso, Profissionalismo, Disrrupção, Credibilidade, Qualidade, Foco, Segurança, Excelência, Eficiência.`
    },
    visao:{
      titulo: 'Campanhas Completas',
      img:'/assets/images/modals/campanhas.png',
      txt: `Ser a maior e mais <b>importante</b> plataforma de marketplace de influenciadores digitais do Brasil, contribuindo para a <b>expansão</b> dos negócios dos nossos clientes, a partir do desenvolvimento da comunicação digital das suas marcas, produtos e serviços.`
    }
  }


  ngOnInit() {
  }

}
