import { DOCUMENT } from '@angular/common'
import { Component, Inject, Renderer2 } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDarkMode = true

  constructor(@Inject(DOCUMENT) private document: HTMLDocument, private renderer: Renderer2) {}

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode
    return this.isDarkMode ? this.setClass('dark-mode') : this.setClass('light-mode')
  }

  setClass(clss: 'light-mode' | 'dark-mode'): void {
    this.renderer.setAttribute(this.document.body, 'class', clss)
  }
}
