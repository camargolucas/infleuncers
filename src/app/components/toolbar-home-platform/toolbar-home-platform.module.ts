import { ToolbarHomePlatformComponent } from './toolbar-home-platform.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ToolbarHomePlatformComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ToolbarHomePlatformComponent
  ]
})
export class ToolbarHomePlatformModule { }
