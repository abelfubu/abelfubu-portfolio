import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-showcase-icon',
  template: `
    <svg
      viewBox="0 0 32 32"
      width="1.5em"
      height="1.5em"
      fill="none"
      stroke="currentcolor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    >
      <path d="M20 24 L12 16 2 26 2 2 30 2 30 24 M16 20 L22 14 30 22 30 30 2 30 2 24" />
      <circle cx="10" cy="9" r="3" />
    </svg>
  `,
  styles: [],
})
export class ShowcaseIconComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
