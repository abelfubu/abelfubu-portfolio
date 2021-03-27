import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { shareReplay } from 'rxjs/operators'
import { Repo, User } from '../models'

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  repos$ = this.http
    .get<Repo[]>('https://api.github.com/users/abelfubu/repos?per_page=100')
    .pipe(shareReplay())
  user$ = this.http.get<User>('https://api.github.com/users/abelfubu').pipe(shareReplay())

  constructor(private http: HttpClient) {}
}
