import { Component, Input, OnInit } from '@angular/core'
import { Repo } from '../../models'

@Component({
  selector: 'app-repo-card',
  template: `
    <h4>
      <app-github-icon [size]="'1em'"></app-github-icon>
      <a [href]="repo.html_url"> {{ repo.name | uppercase }}</a>
    </h4>
    <div class="flex-between">
      <p>{{ repo.updated_at | date }}</p>
      <p>{{ repo.language }}</p>
    </div>
  `,
  styleUrls: ['./repo-card.component.scss'],
})
export class RepoCardComponent implements OnInit {
  @Input() repo!: Repo
  constructor() {}

  ngOnInit(): void {}
}
