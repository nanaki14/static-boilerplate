import { VFC } from 'react'

export type Props = {}

export const AboutKv: VFC<Props> = () => {
  return (
    <div className="AboutKv">
      <img src="http://placekitten.com/2000/1000" alt="" />
      <a href="/">戻る</a>
    </div>
  )
}
