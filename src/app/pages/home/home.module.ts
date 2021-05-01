import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HoverDirectiveModule } from '@app/shared/directives/hover-directive/hover-directive.module.ts.module'
import { ScrollerModule } from '@app/shared/directives/scroller/scroller.module'

import { HomeComponent } from './home.component'

@NgModule({
  imports: [CommonModule, HoverDirectiveModule, ScrollerModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
