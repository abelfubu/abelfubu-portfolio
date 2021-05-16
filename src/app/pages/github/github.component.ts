import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { map, tap } from 'rxjs/operators'
import { Repo, User } from './models'
import { GithubService } from './services/github.service'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
})
export class GithubComponent {
  languages!: Map<string, number>
  chartData!: { name: string; value: number }[]
  view: [number, number] = [0, 400]
  colorScheme = {
    domain: ['#bee4e1', '#67c1b8', '#26a69a', '#1c9588', '#0d7b6c'],
  }
  repos$: Observable<Repo[]> = this.githubService.repos$.pipe(
    tap(repos => this.setLanguagesMap(repos)),
    map<Repo[], Repo[]>(repos => repos.sort(this.sortRepos())),
    tap(console.log),
  )

  user$: Observable<User> = this.githubService.user$.pipe(tap(console.log))

  constructor(private githubService: GithubService) {}

  private sortRepos(): ((a: Repo, b: Repo) => number) | undefined {
    return (a, b) => {
      return -(new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime())
    }
  }

  setLanguagesMap2(repos: Repo[]): void {
    this.languages = new Map()
    repos.forEach(repo => {
      const count = this.languages.has(repo.language) ? this.languages.get(repo.language) : 0
      this.languages.set(repo.language, count ? count + 1 : 1)
    })
  }

  setLanguagesMap(repos: Repo[]): void {
    let temp: { name: string; value: number }[] = []
    repos.forEach(({ language }) => {
      const isThere = temp.find(repo => repo.name === language)
      if (isThere) {
        temp = temp.map(item => {
          return item.name === language ? { ...item, value: item.value + 1 } : item
        })
      } else if (language) {
        temp.push({ name: language, value: 1 })
      }
    })
    this.chartData = temp
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)))
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)))
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)))
  }
}
