import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { Repo } from './models'
import { GithubService } from './services/github.service'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
})
export class GithubComponent implements OnInit {
  repos$: Observable<Repo[]> = this.githubService.repos$.pipe(tap(console.log))
  constructor(private githubService: GithubService) {}

  ngOnInit(): void {}
}
