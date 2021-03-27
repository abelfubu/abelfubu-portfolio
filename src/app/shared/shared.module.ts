import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SvgIconsModule } from './svg-icons/svg-icons.module'
import { HoverEffectDirective } from './directives/hover-effect.directive'

@NgModule({
  imports: [CommonModule, SvgIconsModule],
  declarations: [HoverEffectDirective],
  exports: [SvgIconsModule, HoverEffectDirective],
})
export class SharedModule {}
