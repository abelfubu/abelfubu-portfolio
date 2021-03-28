import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-logo-icon',
  template: `
    <svg
      viewBox="0 0 32 34"
      [attr.width]="size"
      [attr.height]="size"
      [attr.stroke-linecap]="strokeType"
      [attr.stroke-linejoin]="strokeType"
      [attr.stroke-width]="strokeWidth"
    >
      <path
        d="M32.7197 13.3643C33.2906 16.4421 32.9645 19.3839 31.9678 22H28.2084C31.5001 15.4457 28.5709 6.88131 20.88 4.17463C16.4924 2.63051 11.6032 3.51352 8.0542 6.49107C3.17958 10.5808 2.33016 17.0123 4.8038 22H2.93073H1.05766C0.719088 21.1077 0.4576 20.1792 0.280247 19.2231C-2.00492 6.90196 10.0833 -3.23985 22.0391 0.967799C27.5877 2.92059 31.6592 7.6461 32.7197 13.3643Z"
        [attr.fill]="color"
      />
      <path
        d="M10.8337 31.0323C7.07157 29.7363 3.97429 27.2187 2 24H6.28239C7.72546 25.6636 9.65077 27.0106 12.0176 27.8259C16.4992 29.3698 21.4932 28.4869 25.1183 25.5098C25.6953 25.036 26.2169 24.5308 26.6846 24H31C27.1091 30.2943 18.9416 33.8255 10.8337 31.0323Z"
        fill="#26A69A"
      />
      <path d="M9.79743 21.7242L16.5998 10.0902L23.274 21.7983L9.79743 21.7242Z" fill="#FFC107" />
    </svg>
  `,
  styles: [],
})
export class LogoIconComponent {
  @Input() size = '3em'
  @Input() color = 'currentColor'
  @Input() strokeWidth = '0'
  @Input() strokeType = 'round'
}
