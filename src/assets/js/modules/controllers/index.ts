import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'

export const controllerInit = () => {
  const application = Application.start()

  const context = require.context('./', true, /_controller\.ts$/)
  application.load(definitionsFromContext(context))
}
