import { Directive, ElementRef, OnInit } from '@angular/core'
declare module 'hover-effect'
import hoverEffect from 'hover-effect'

@Directive({
  selector: '[hoverEffect]',
})
export class HoverEffectDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    return new hoverEffect({
      parent: this.el.nativeElement,
      intensity: 1,
      angle: Math.PI / 8,
      image1:
        'https://media-exp1.licdn.com/dms/image/C4E03AQHk550y2tSIjg/profile-displayphoto-shrink_800_800/0/1593251933328?e=1622073600&v=beta&t=JBrO1Z1cOYDoZFw2MvMXFCpsykP4iM0U2RC9CLbvWZA',
      image2:
        'https://scontent.fmad6-1.fna.fbcdn.net/v/t1.0-9/106152590_10158331010254076_6776548748591125359_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=XT-EfpG5X3EAX-lHI-P&_nc_ht=scontent.fmad6-1.fna&oh=45e3299877949304167c384a410910b5&oe=6082D4F8',
      displacementImage: 'assets/14.jpg',
      // speedIn: 5,
      // speedOut: 5,
    })
  }
}
