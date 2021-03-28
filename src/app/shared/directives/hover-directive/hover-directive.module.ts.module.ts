import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HoverEffectDirective } from './hover-effect.directive'

@NgModule({
  imports: [CommonModule],
  declarations: [HoverEffectDirective],
  exports: [HoverEffectDirective],
})
export class HoverDirectiveModule {}
