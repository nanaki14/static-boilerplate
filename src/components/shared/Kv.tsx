import { VFC } from 'react'

export type Props = {}

export const Kv: VFC<Props> = () => {
  return (
    <div className="Kv" data-controller="kv">
      <img src="http://placekitten.com/2000/800" alt="" />
      <a
        className="Kv__Link"
        href="/about"
        data-kv-target="link"
        data-action="mouseenter->kv#mouseEnter mouseleave->kv#mouseLeave"
      >
        About
      </a>
    </div>
  )
}
