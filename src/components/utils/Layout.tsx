import { ReactNode, VFC } from 'react'
import { MouseStoker } from '@/components/shared/MouseStoker'

type Props = {
  children: ReactNode
}

export const Layout: VFC<Props> = (props) => {
  return (
    <>
      <div data-barba="wrapper" className="l-wrapper">
        <div data-barba="container" className="l-content">
          {props.children}
        </div>
        <MouseStoker />
      </div>
    </>
  )
}
