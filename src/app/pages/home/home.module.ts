import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HoverDirectiveModule } from '@app/shared/directives/hover-directive/hover-directive.module.ts.module'
import { HomeComponent } from './home.component'

@NgModule({
  imports: [CommonModule, HoverDirectiveModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
