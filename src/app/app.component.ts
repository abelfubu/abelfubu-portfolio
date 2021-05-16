import { DOCUMENT } from '@angular/common'
import { Component, Inject, OnInit, Renderer2 } from '@angular/core'

type ThemeColors = '#282c34' | '#fff'

@Component({
  selector: 'app-root',
  template: `<app-header (darkToggled)="toggleDarkMode()" [isDarkMode]="isDarkMode"></app-header>
    <app-sidenav>
      <a
        #menuItem
        routerLink="/"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
      >
        <app-home-icon></app-home-icon>
        <p>Home</p>
      </a>
      <a #menuItem routerLink="/gallery" routerLinkActive="active">
        <app-showcase-icon></app-showcase-icon>
        <p>Portfolio</p>
      </a>
      <a #menuItem routerLink="/github" routerLinkActive="active">
        <app-github-icon></app-github-icon>
        <p>Github</p>
      </a>
      <a #menuItem routerLink="/contact" routerLinkActive="active">
        <app-contact-icon></app-contact-icon>
        <p>Contact</p>
      </a>
    </app-sidenav>

    <router-outlet></router-outlet>`,
  styles: [
    `
      @use 'mixins' as *;

      :host {
        display: block;
        padding-top: 82px;

        img {
          width: 110vw;
          margin-left: -200px;
          top: 10%;
          z-index: -1;
          mix-blend-mode: exclusion;
          opacity: 0.2;
          position: absolute;
          filter: invert(100%);
          max-height: 90vh;
        }

        a {
          padding: 0.5em;
          transition: opacity 500ms ease-in;
          @include flex(flex-start) {
            align-items: center;
          }

          &.active {
            opacity: 1;
          }

          & :first-child {
            z-index: 4;
          }
        }

        p {
          transform: translateY(-2px) translateX(-100px);
          margin-left: 1em;
          transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1);
        }
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  isDarkMode = true

  constructor(@Inject(DOCUMENT) private document: HTMLDocument, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.setCustomProperties('#282c34')
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode
    if (this.isDarkMode) {
      this.setCustomProperties('#282c34')
      this.setClass('dark-mode')
    } else {
      this.setCustomProperties('#fff')
      this.setClass('light-mode')
    }
  }

  setClass(clss: 'light-mode' | 'dark-mode'): void {
    this.renderer.setAttribute(this.document.body, 'class', clss)
  }

  setCustomProperties(color: ThemeColors): void {
    this.document.documentElement.style.setProperty('--scrollbar', color)
  }
}
