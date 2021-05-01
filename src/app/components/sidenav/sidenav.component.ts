import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout'
import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  HostBinding,
  OnInit,
  QueryList,
  Renderer2,
} from '@angular/core'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, AfterContentInit {
  width = '2.8em'
  height = '80px'
  isSmall = false

  @ContentChildren('menuItem') items!: QueryList<ElementRef<HTMLAnchorElement>>

  @HostBinding('style.width')
  get isWidth(): string {
    return this.width
  }

  constructor(private renderer: Renderer2, private bo: BreakpointObserver) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.bo.observe([Breakpoints.XSmall]).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isSmall = true
        this.width = '100%'
        this.items.forEach(item =>
          this.renderer.setStyle(item.nativeElement.children[1], 'display', 'none'),
        )
      } else {
        this.isSmall = false
        this.width = '2.8em'
        this.items.forEach(item =>
          this.renderer.setStyle(item.nativeElement.children[1], 'display', 'block'),
        )
      }
    })
  }

  async onMouseOver(): Promise<void> {
    if (this.isSmall) {
      return
    }
    this.width = '10em'
    for (const item of this.items) {
      if (!item.nativeElement?.children[1]) {
        return
      }
      await this.delay(50)
      this.renderer.setStyle(item.nativeElement.children[1], 'transform', 'translateX(0px)')
      this.renderer.setStyle(item.nativeElement.children[1], 'opacity', 1)
    }
  }

  async onMouseLeave(): Promise<void> {
    if (this.isSmall) {
      return
    }
    this.width = '2.8em'
    for (const item of this.items) {
      if (!item.nativeElement?.children[1]) {
        return
      }
      await this.delay(50)
      this.renderer.setStyle(item?.nativeElement.children[1], 'transform', 'translateX(-100px)')
      this.renderer.setStyle(item?.nativeElement.children[1], 'opacity', 0)
    }
  }

  delay(seconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, seconds))
  }
}
