import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlide, IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 50,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
  };

  slideOptsMobile = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
  }

  influencersSlide=[
    {
      id: '',
      path:'/assets/images/influencers/influencer1.jpeg',
      depoimento:'Respeito e a confiança que passam para nós influenciadores é surreal.'
    },
    {
      id: '',
      path:'/assets/images/influencers/influencer3.jpg',
      depoimento: 'Trabalhar com a ID tem sido fator determinante para dar o próximo passo como influenciadora'
    },
    {
      id: '',
      path:'/assets/images/influencers/influencer2.jpg',
      depoimento: 'Foi muito bom trabalhar esse ano com a InSpread digital, equipe bem organizada, nos auxiliando durante toda a ação e com o pagamento sempre no prazo'
    },
   /*  {
      id: '',
      path:'/assets/images/influencers/influencer4.jpg',
      depoimento:''
    }, */
    {
      id: '',
      path:'/assets/images/influencers/influencer5.jpg',
      depoimento:'Competencia, parceria e sinceridade.'
    },
    {
      id: '',
      path:'/assets/images/influencers/influencer6.jpg',
      depoimento:'Foi uma experiência única, muito gratificante, me senti realizada.'
    }
  ]


  patrocinadoresSlide= [
    {
      id: '',
      path:'/assets/images/patrocinadores/adidas1.svg'
    },
    {
      id: '',
      path:'/assets/images/patrocinadores/adidas2.svg'
    },
    /* {
      id: '',
      path:'/assets/images/patrocinadores/arena.svg'
    }, */
    {
      id: '',
      path:'/assets/images/patrocinadores/ateliermix.svg'
    },
    {
      id: '',
      path:'/assets/images/patrocinadores/capadorte.svg'
    },
    {
      id: '',
      path:'/assets/images/patrocinadores/dumond.svg'
    },
    {
      id: '',
      path:'/assets/images/patrocinadores/rubronegra.svg'
    },
    {
      id: '',
      path:'/assets/images/patrocinadores/viauno.svg'
    }

  ]

 /*  slidesPerView: 1,
  noSwipingSelector: this.device.isDevice() ? '' : this.noSwipingSelectorOpts,
  zoom: false,
  loop: true,
  loopedSlides: 0,
  spaceBetween: this.device.isDevice() ? 10 : 0,
  loopAdditionalSlides: this.device.isDevice() ? 2 : 0,
  autoplay: {
    delay: 12000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.banner-pagination',
    clickable: true,
    bulletClass: 'banner-pagination-bullet',
    bulletActiveClass: 'banner-pagination-bullet-active',
  },
} */
  @ViewChild('slidePatrocinadores', { read: IonSlides }) slidePatrocinadores: IonSlides; 
  @ViewChild('slideDepoimentos', { read: IonSlides }) slideDepoimentos: IonSlides; 
  constructor() { }

  ngOnInit() {
  }

  nextSlide(){
    this.slidePatrocinadores.slideNext();
  }

  nextSlideDepo(){
    this.slideDepoimentos.slideNext();
  }

  prevSlideDepo(){
    this.slideDepoimentos.slidePrev()
  }

  prevSlide(){
    this.slidePatrocinadores.slidePrev()
  }

  get isMobile() {
    return window.innerWidth <= 575;
  }

}
