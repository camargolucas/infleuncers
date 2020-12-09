import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-cadastre-se',
  templateUrl: './cadastre-se.page.html',
  styleUrls: ['./cadastre-se.page.scss'],
})
export class CadastreSePage implements OnInit {

  constructor(public cfService:ConfigService) { }

  ngOnInit() {
  }

}
