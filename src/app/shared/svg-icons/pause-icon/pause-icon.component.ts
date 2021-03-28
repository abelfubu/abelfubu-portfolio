import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-pause-icon',
  template: `
    <svg
      id="i-pause"
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
      <path d="M23 2 L23 30 M9 2 L9 30" />
    </svg>
  `,
  styles: [],
})
export class PauseIconComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
