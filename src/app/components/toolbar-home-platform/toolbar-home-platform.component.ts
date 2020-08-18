import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toolbar-home-platform',
  templateUrl: './toolbar-home-platform.component.html',
  styleUrls: ['./toolbar-home-platform.component.scss'],
})
export class ToolbarHomePlatformComponent implements OnInit {
  folder = ''
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.data.pageName;
    console.log(this.activatedRoute.snapshot)
  }

}
