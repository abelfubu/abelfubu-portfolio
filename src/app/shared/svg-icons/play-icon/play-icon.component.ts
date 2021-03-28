import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-play-icon',
  template: `
    <svg
      id="i-play"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="1.5em"
      height="1.5em"
      fill="none"
      stroke="currentcolor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    >
      <path d="M10 2 L10 30 24 16 Z" />
    </svg>
  `,
  styles: [],
})
export class PlayIconComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
