import { AboutKv } from '@/components/shared/AboutKv'
import { Layout } from '@/components/utils/Layout'
import { VFC } from 'react'

export type Props = {}

export const About: VFC<Props> = () => {
  return (
    <Layout>
      <AboutKv />
    </Layout>
  )
}
