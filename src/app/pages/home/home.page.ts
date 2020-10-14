import { Component, OnInit } from '@angular/core';

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
      title: 'Inicio',
      url: '/home/inicio',
      color:'red'
      //icon: 'heart'
    },
    {
      title: 'Quem Somos',
      url: '/home/quem-somos',
      color:'blue'
     // icon: 'paper-plane'     
    }, 
     {
      title: 'Portfólio',
      url: '/home/portfolio',
      icon: 'heart',
      color: 'yellow'
    },
    /*
    {
      title: 'Cadastre-se',
      url: '/home/cadastro',
      icon: 'heart'
    },
    {
      title: 'Plataforma',
      url: '/home/plataforma',
      icon: 'heart'
    },
    {
      title: 'FAQ',
      url: '/home/faq',
      icon: 'heart'
    },
    {
      title: 'Fale Conosco',
      url: '/home/faleconosco',
      icon: 'heart'
    }, */
  

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor() { }

  ngOnInit() {

  }

  

}
