import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SvgIconsModule } from './svg-icons/svg-icons.module'

@NgModule({
  imports: [CommonModule, SvgIconsModule],
  declarations: [],
  exports: [SvgIconsModule],
})
export class SharedModule {}
