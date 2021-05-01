import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { HoverEffectDirective } from './hover-effect.directive'

@NgModule({
  imports: [CommonModule],
  declarations: [HoverEffectDirective],
  exports: [HoverEffectDirective],
})
export class HoverDirectiveModule {}
