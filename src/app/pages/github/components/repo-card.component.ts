import { Component, Input, OnInit } from '@angular/core'
import { Repo } from '../models'

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
  styles: [
    `
      @use "index" as *;

      :host {
        border-radius: 8px;
        box-shadow: 0 0 22px 0 #23232330;
        padding: 1em;
        background-color: rgba(map-get($green, 600), 40%);

        .flex-between {
          @include flex;
        }

        a:hover {
          color: map-get($orange, 200);
        }
      }
    `,
  ],
})
export class RepoCardComponent {
  @Input() repo!: Repo
}
