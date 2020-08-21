import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-landing-home',
  templateUrl: './landing-home.page.html',
  styleUrls: ['./landing-home.page.scss'],
})
export class LandingHomePage implements OnInit {
 
  constructor(private menu: MenuController) { }


  pages = [
    {
      "title":"Inicio",
      "url":"/landing-home/home"
    },    
    {
      "title":"Sobre",
      "url":"/landing-home/about"
    }
 
]

  ngOnInit() {
    
  }
  openFirst() {
    this.menu.open()
  }

  goTo(){
    this.menu.close()
  }


  get isMobile() {
		return window.innerWidth <= 575;
	}


}
