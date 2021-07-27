import { delay } from '@/utils'
import gsap, { Power3 } from 'gsap'

export const commnTransition = {
  transitions: [
    {
      name: 'default-transition',
      async leave() {
        gsap.to('body', 0.3, {
          opacity: '0',
          ease: Power3.easeIn,
        })
        return await delay(300)
      },
      async enter() {
        await delay(300)
        gsap.to('body', 0.3, {
          opacity: '1',
          ease: Power3.easeIn,
        })
      },
    },
  ],
}
