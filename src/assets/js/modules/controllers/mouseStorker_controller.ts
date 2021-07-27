import gsap, { Power3 } from 'gsap'
import { Controller } from 'stimulus'

export default class extends Controller {
  mouseTarget?: globalThis.HTMLDivElement
  static targets = ['mouse']

  move(e: globalThis.MouseEvent) {
    requestAnimationFrame(() => {
      if (this.mouseTarget) {
        gsap.to(this.mouseTarget, 0.3, {
          top: e.clientY,
          left: e.clientX,
          ease: Power3.easeOut,
        })
      }
    })
  }
}
