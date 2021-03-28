import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'github',
    loadChildren: () => import('./pages/github/github.module').then(m => m.GithubModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule),
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/portfolio/portfolio.module').then(m => m.PortfolioModule),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
