import { renderPage } from '@/utils/renderPage'
import { Home } from '@/components/pages/Home'
import { Head } from '@/components/utils/Head'

export default () =>
  `${renderPage({
    elm: <Home />,
    head: <Head />,
  })}`
