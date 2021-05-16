import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// CUSTOM IMPORTS
import { NgxChartsModule } from '@swimlane/ngx-charts'
import { GithubComponent } from './github.component'
import { GithubRoutingModule } from './github-routing.module'
import { SvgIconsModule } from '@app/shared/svg-icons/svg-icons.module'
import { RepoCardComponent } from './components/repo-card.component'

@NgModule({
  declarations: [GithubComponent, RepoCardComponent],
  imports: [CommonModule, GithubRoutingModule, NgxChartsModule, SvgIconsModule],
})
export class GithubModule {}
