import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.page.html',
  styleUrls: ['./fale-conosco.page.scss'],
})
export class FaleConoscoPage implements OnInit {

  constructor(public cfService: ConfigService) { }

  ngOnInit() {
  }

}
