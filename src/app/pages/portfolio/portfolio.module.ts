import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ScrollerModule } from '@app/shared/directives/scroller/scroller.module'

import { PortfolioRoutingModule } from './portfolio-routing.module'
import { PortfolioComponent } from './portfolio.component'

@NgModule({
  declarations: [PortfolioComponent],
  imports: [CommonModule, PortfolioRoutingModule, ScrollerModule],
})
export class PortfolioModule {}
