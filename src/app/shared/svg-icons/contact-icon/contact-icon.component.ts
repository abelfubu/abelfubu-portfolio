import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-contact-icon',
  template: `
    <svg
      viewBox="0 0 32 32"
      [attr.width]="size"
      [attr.height]="size"
      [attr.stroke]="color"
      [attr.stroke-linecap]="strokeType"
      [attr.stroke-linejoin]="strokeType"
      [attr.stroke-width]="strokeWidth"
    >
      <path
        d="M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z"
      />
      <circle cx="16" cy="21" r="4" />
    </svg>
  `,
})
export class ContactIconComponent {
  @Input() size = '1.5em'
  @Input() color = 'currentColor'
  @Input() strokeWidth = '2'
  @Input() strokeType = 'round'
}
