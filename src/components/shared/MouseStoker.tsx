import { VFC } from 'react'

export type Props = {}

export const MouseStoker: VFC<Props> = () => {
  return (
    <div
      className="MouseStorker"
      data-controller="mouseStorker"
      data-mouseStorker-target="mouse"
      data-action="mousemove@window->mouseStorker#move"
    />
  )
}
