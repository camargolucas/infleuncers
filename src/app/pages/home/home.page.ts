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
      title: 'Influenciadores',
      url: '/home/influencer',
      icon: 'heart'
    },
    {
      title: 'Empresas',
      url: '/home/company',
      icon: 'paper-plane'
    }
  

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor() { }

  ngOnInit() {
  }

  

}
