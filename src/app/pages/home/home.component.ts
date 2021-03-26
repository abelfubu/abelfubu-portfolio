import { DOCUMENT } from '@angular/common'
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core'
import { fromEvent } from 'rxjs'
import { tap, throttleTime } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  window = this.document.defaultView
  currentPage = 0
  @ViewChildren('section')
  sections!: QueryList<ElementRef<HTMLElement>>
  scroll$ = fromEvent(window, 'wheel').pipe(
    throttleTime(500),
    tap(event => this.handleScrollEvent(event)),
  )
  wheel$ = fromEvent(window, 'touch').pipe(
    throttleTime(500),
    tap(event => this.handleScrollEvent(event)),
    tap(console.log),
  )

  constructor(
    @Inject(DOCUMENT) private document: HTMLDocument,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
  ) {}

  ngAfterViewInit(): void {
    this.renderer.setAttribute(this.sections.first.nativeElement, 'class', 'on-screen')
    this.cdr.detectChanges()
  }

  incrementCurrentPage(): void {
    const sectionsLength = this.sections.length - 1
    this.currentPage = this.currentPage !== sectionsLength ? this.currentPage + 1 : sectionsLength
  }

  decreaseCurrentPage(): void {
    this.currentPage = this.currentPage === 0 ? 0 : this.currentPage - 1
  }

  setClass(cssClass: string, index: number): void {
    this.renderer.setAttribute(this.sections.get(index)?.nativeElement, 'class', cssClass)
  }

  removeClass(): void {
    this.renderer.removeAttribute(this.sections.get(this.currentPage)?.nativeElement, 'class')
  }

  handleScrollEvent(event: any): void {
    return event.deltaY > 0 ? this.scrollNextPage() : this.scrollPreviousPage()
  }

  scrollNextPage(): void {
    this.setClass('fadeout-top', this.currentPage)
    this.incrementCurrentPage()
    this.setClass('fadein-bottom', this.currentPage)
  }

  scrollPreviousPage(): void {
    this.setClass('fadeout-bottom', this.currentPage)
    this.decreaseCurrentPage()
    this.setClass('fadein-top', this.currentPage)
  }

  handleBulletClick(index: number): void {
    if (index < this.currentPage) {
      this.setClass('fadeout-bottom', this.currentPage)
      this.currentPage = index
      this.setClass('fadein-top', this.currentPage)
    } else if (index > this.currentPage) {
      this.setClass('fadeout-top', this.currentPage)
      this.currentPage = index
      this.setClass('fadein-bottom', this.currentPage)
    }
  }
}
