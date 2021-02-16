import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    // {
    //   title: 'Inbox',
    //   url: '/home/folder',
    //   icon: 'mail'
    // },
    {
      title: 'Início',
      id:'inicio',
      url: '/home/inicio',
      color:'red'
      //icon: 'heart'
    },
    {
      title: 'Quem Somos',
      id:'quem-somos',
      url: '/home/quem-somos',
      color:'blue'
     // icon: 'paper-plane'     
    }, 
     {
      title: 'Portfólio',
      id:'portfolio',
      url: '/home/portfolio',
      icon: 'heart',
      color: 'yellow'
    },
   
    {
      title: 'Cadastre-se',
      id:'cadastre-se',
      url: '/home/cadastre-se',
      icon: 'heart',
      color: 'red'
    },
    {
      title: 'Plataforma',
      url: '/home/plataforma',
      id:'plataforma',
      icon: 'heart',
      color: 'blue'
    },  
    {
      title: 'Fale Conosco',
      url: '/home/fale-conosco',
      id:'fale-conosco',
      icon: 'heart',
      color: 'yellow'
    }
    /*
    {
      title: 'FAQ',
      url: '/home/faq',
      icon: 'heart'
    },
     
  , */
  

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(public cfgService: ConfigService) { 
    const path = window.location.pathname.split('pages')[0];
    let x = path.split('/home/')[1];
    console.log(x)
    if (x !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.id.toLowerCase() === x.toLowerCase());
    }

   
  }

  ngOnInit() {
    
  }


   openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  selectMenu(index){
    this.selectedIndex = index;
    this.closeNav()
  }
  
   closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  get isMobile() {
    return window.innerWidth <= 575;
  }

}
