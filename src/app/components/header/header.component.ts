import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() isDarkMode!: boolean
  @Output() onDarkToggled = new EventEmitter()
}
