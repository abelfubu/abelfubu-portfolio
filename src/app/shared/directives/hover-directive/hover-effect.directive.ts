import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core'
import HoverEffect, { HoverEffectOptions } from 'hover-effect'

@Directive({
  selector: '[hoverEffect]',
})
export class HoverEffectDirective implements OnInit {
  @Input() image1 = ''
  @Input() image2 = ''
  @Input() bgImage = ''
  hoverEffect!: HoverEffect
  hoverEffectOptions: HoverEffectOptions = {
    parent: this.el.nativeElement,
    intensity: 0.3,
    // angle: Math.PI / 8,
    image1: '',
    image2: '',
    displacementImage: 'assets/14.jpg',
    // displacementImage: 'assets/svg/logo.svg',
    // speedIn: 5,
    // speedOut: 5,
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.hoverEffectOptions = {
      ...this.hoverEffectOptions,
      image1: this.image1,
      image2: this.image2,
    }
    this.hoverEffect = new HoverEffect(this.hoverEffectOptions)
  }

  next(): void {
    this.hoverEffect.next()
  }

  previous(): void {
    this.hoverEffect.previous()
  }
}
