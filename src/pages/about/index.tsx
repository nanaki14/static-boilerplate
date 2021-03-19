import { renderPage } from '@/utils/renderPage'
import { About } from '@/components/pages/About'
import { Head } from '@/components/utils/Head'

export default () =>
  `${renderPage({
    elm: <About />,
    head: <Head title="about" />,
  })}`
