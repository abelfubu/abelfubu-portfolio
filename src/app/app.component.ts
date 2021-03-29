import { DOCUMENT } from '@angular/common'
import { Component, Inject, OnInit, Renderer2, ViewChild } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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

  setCustomProperties(color: '#282c34' | '#fff'): void {
    this.document.documentElement.style.setProperty('--scrollbar', color)
  }
}
