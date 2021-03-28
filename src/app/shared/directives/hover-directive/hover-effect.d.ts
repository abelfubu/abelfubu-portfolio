declare module 'hover-effect' {
  interface HoverEffectOptions {
    parent: HTMLElement
    image1: string
    image2: string
    displacementImage: string
    intensity?: number
    intensity1?: number
    intensity2?: number
    angle?: number
    angle1?: number
    angle2?: number
    speedIn?: number
    speedOut?: number
    hover?: boolean
    easing?: string
    video?: boolean
    imagesRatio?: number
  }

  export default class {
    constructor(options: HoverEffectOptions)
    next: () => void
    previous: () => void
  }
}
