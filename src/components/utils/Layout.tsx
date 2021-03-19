import { ReactNode, VFC } from 'react'

type Props = {
  children: ReactNode
}

export const Layout: VFC<Props> = (props) => {
  return (
    <>
      <div className="l-wrapper">
        <div className="l-content">{props.children}</div>
      </div>
    </>
  )
}
