import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SvgIconsModule } from './svg-icons/svg-icons.module'
import { HoverEffectDirective } from './directives/hover-directive/hover-effect.directive'
import { HoverDirectiveModule } from './directives/hover-directive/hover-directive.module.ts.module'

@NgModule({
  imports: [CommonModule, SvgIconsModule, HoverDirectiveModule],
  exports: [SvgIconsModule, HoverEffectDirective, HoverDirectiveModule],
})
export class SharedModule {}
