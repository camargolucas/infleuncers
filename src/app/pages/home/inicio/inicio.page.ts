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
    
  };

  constructor() { }

  ngOnInit() {
  }

}
