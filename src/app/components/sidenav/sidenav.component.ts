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
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, AfterContentInit {
  width = 3.3
  height = '80px'

  @ContentChildren('menuItem') items!: QueryList<ElementRef<HTMLAnchorElement>>

  @HostBinding('style.width.em')
  get isWidth(): number {
    return this.width
  }

  constructor(private renderer: Renderer2, private bo: BreakpointObserver) {}

  ngOnInit(): void {
    // this.bo.observe([Breakpoints.XSmall]).subscribe((state: BreakpointState) => {
    //   console.log(state)
    //   if (state.matches) {
    //     this.width = 100
    //   }
    // })
  }

  ngAfterContentInit(): void {
    console.log(this.items)
  }

  async onMouseOver(): Promise<void> {
    this.width = 12
    for (const item of this.items) {
      await this.delay(50)
      this.renderer.setStyle(item.nativeElement.children[1], 'transform', 'translateX(0px)')
      this.renderer.setStyle(item.nativeElement.children[1], 'opacity', 1)
    }
  }

  async onMouseLeave(): Promise<void> {
    this.width = 3.3
    for (const item of this.items) {
      await this.delay(50)
      this.renderer.setStyle(item?.nativeElement.children[1], 'transform', 'translateX(-100px)')
      this.renderer.setStyle(item?.nativeElement.children[1], 'opacity', 0)
    }
  }

  delay(seconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, seconds))
  }
}
