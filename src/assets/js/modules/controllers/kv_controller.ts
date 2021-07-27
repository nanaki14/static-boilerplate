import { Controller } from 'stimulus'

export default class extends Controller {
  linkTarget?: globalThis.HTMLAnchorElement
  static targets = ['link']

  mouseEnter() {
    requestAnimationFrame(() => {
      if (this.linkTarget) {
        this.linkTarget.classList.add('is-hover')
      }
    })
  }

  mouseLeave() {
    requestAnimationFrame(() => {
      if (this.linkTarget) {
        this.linkTarget.classList.remove('is-hover')
      }
    })
  }
}
