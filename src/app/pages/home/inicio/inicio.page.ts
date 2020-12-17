import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 2,
    spaceBetween: 50,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
  };

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

  slideOptsMobile = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
  }

  constructor() { }

  ngOnInit() {
  }

  get isMobile() {
    return window.innerWidth <= 575;
  }

}
