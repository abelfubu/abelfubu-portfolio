import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OptionsIconComponent } from './options-icon.component'
import { GithubIconComponent } from './github.component'
import { HomeIconComponent } from './home-icon.component'
import { LightModeIconComponent } from './light-mode-icon.component'
import { DarkModeIconComponent } from './dark-mode-icon.component'
import { ContactIconComponent } from './contact-icon.component'
import { LinkedinIconComponent } from './linkedin-icon.component'
import { ShowcaseIconComponent } from './showcase-icon.component'
import { LogoIconComponent } from './logo-icon.component'
import { PauseIconComponent } from './pause-icon.component'
import { PlayIconComponent } from './play-icon.component'

@NgModule({
  imports: [CommonModule],
  declarations: [
    PlayIconComponent,
    LogoIconComponent,
    HomeIconComponent,
    PauseIconComponent,
    GithubIconComponent,
    OptionsIconComponent,
    ContactIconComponent,
    DarkModeIconComponent,
    LinkedinIconComponent,
    ShowcaseIconComponent,
    LightModeIconComponent,
  ],
  exports: [
    PlayIconComponent,
    LogoIconComponent,
    HomeIconComponent,
    PauseIconComponent,
    GithubIconComponent,
    ContactIconComponent,
    OptionsIconComponent,
    LinkedinIconComponent,
    DarkModeIconComponent,
    ShowcaseIconComponent,
    LightModeIconComponent,
  ],
})
export class SvgIconsModule {}
