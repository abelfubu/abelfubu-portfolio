import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ScrollerDirective } from './scroller.directive'

@NgModule({
  imports: [CommonModule],
  declarations: [ScrollerDirective],
  exports: [ScrollerDirective],
})
export class ScrollerModule {}
