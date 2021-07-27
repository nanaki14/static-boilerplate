import barba from '@barba/core'
import barbaRouter from '@barba/router'
import { headMetaReplace } from './head'
import { routes } from './routes'
import { commnTransition } from './transitions/common'

export const barbaInit = () => {
  barba.use(barbaRouter, {
    routes,
  })
  headMetaReplace()
  barba.init({
    ...commnTransition,
    logLevel: 'off',
  })
}
