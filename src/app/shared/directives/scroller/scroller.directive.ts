import {
  AfterContentInit,
  ChangeDetectorRef,
  ContentChildren,
  Directive,
  ElementRef,
  OnDestroy,
  QueryList,
  Renderer2,
} from '@angular/core'
import { fromEvent, Subject } from 'rxjs'
import { takeUntil, tap, throttleTime } from 'rxjs/operators'

@Directive({
  selector: '[scroller]',
})
export class ScrollerDirective implements AfterContentInit, OnDestroy {
  currentPage = 0
  touchStart = 0
  bullets!: HTMLDivElement
  @ContentChildren('section')
  sections!: QueryList<ElementRef<HTMLElement>>

  unsubscribe$ = new Subject()

  wheel$ = fromEvent(window, 'wheel')
    .pipe(
      throttleTime(500),
      tap(event => this.handleScrollEvent(event)),
      takeUntil(this.unsubscribe$),
    )
    .subscribe()
  touchstart$ = fromEvent<TouchEvent>(window, 'touchstart')
    .pipe(
      throttleTime(500),
      tap((event: TouchEvent) => (this.touchStart = event.changedTouches[0].clientY)),
      takeUntil(this.unsubscribe$),
    )
    .subscribe()
  touchend$ = fromEvent<TouchEvent>(window, 'touchend')
    .pipe(
      throttleTime(500),
      tap((event: TouchEvent) => this.handleTouchEnd(event)),
      takeUntil(this.unsubscribe$),
    )
    .subscribe()

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private cdr: ChangeDetectorRef,
  ) {}

  ngAfterContentInit(): void {
    this.renderer.setAttribute(this.sections.first.nativeElement, 'class', 'on-screen')
    this.cdr.detectChanges()
    this.addBulletsElement()
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
    this.updateFilledBullet()
  }

  scrollPreviousPage(): void {
    this.setClass('fadeout-bottom', this.currentPage)
    this.decreaseCurrentPage()
    this.setClass('fadein-top', this.currentPage)
    this.updateFilledBullet()
  }

  handleTouchEnd(event: TouchEvent): void {
    event.preventDefault()
    const isNextPage = event.changedTouches[0].clientY > this.touchStart
    if (!isNextPage && this.currentPage !== this.sections.length - 1) {
      this.scrollNextPage()
    } else if (isNextPage && this.currentPage !== 0) {
      this.scrollPreviousPage()
    }
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
    this.updateFilledBullet()
  }

  private updateFilledBullet(): void {
    this.bullets.querySelectorAll('.bullet').forEach((bullet, i) => {
      if (this.currentPage === i) {
        this.renderer.addClass(bullet, 'filled')
      } else {
        this.renderer.removeClass(bullet, 'filled')
      }
    })
  }

  addBulletsElement(): void {
    if (!this.sections.length) {
      return
    }
    this.bullets = this.renderer.createElement('div')
    this.renderer.addClass(this.bullets, 'bullets')
    this.sections.forEach((_, index) => {
      const bullet = this.createBulletItem(index)
      this.renderer.appendChild(this.bullets, bullet)
    })
    this.renderer.appendChild(this.el.nativeElement.parentElement, this.bullets)
  }

  createBulletItem(index: number): HTMLDivElement {
    const bullet = this.renderer.createElement('div')
    this.renderer.addClass(bullet, 'bullet')
    this.renderer.listen(bullet, 'click', () => this.handleBulletClick.bind(this)(index))
    if (index === 0) {
      this.renderer.addClass(bullet, 'filled')
    }
    return bullet
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
  }
}
