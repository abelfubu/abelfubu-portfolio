import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OptionsIconComponent } from './options-icon/options-icon.component'
import { GithubIconComponent } from './github/github.component'
import { HomeIconComponent } from './home-icon/home-icon.component'
import { LightModeIconComponent } from './light-mode-icon/light-mode-icon.component'
import { DarkModeIconComponent } from './dark-mode-icon/dark-mode-icon.component'
import { ContactIconComponent } from './contact-icon/contact-icon.component'

@NgModule({
  imports: [CommonModule],
  declarations: [
    HomeIconComponent,
    GithubIconComponent,
    OptionsIconComponent,
    ContactIconComponent,
    DarkModeIconComponent,
    LightModeIconComponent,
  ],
  exports: [
    HomeIconComponent,
    GithubIconComponent,
    ContactIconComponent,
    OptionsIconComponent,
    DarkModeIconComponent,
    LightModeIconComponent,
  ],
})
export class SvgIconsModule {}
