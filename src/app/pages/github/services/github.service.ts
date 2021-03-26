import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { shareReplay } from 'rxjs/operators'
import { Repo } from '../models'

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  repos$ = this.http.get<Repo[]>('https://api.github.com/users/abelfubu/repos').pipe(shareReplay())

  constructor(private http: HttpClient) {}
}
