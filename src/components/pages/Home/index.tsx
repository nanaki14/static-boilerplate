import { Kv } from '@/components/shared/Kv'
import { Layout } from '@/components/utils/Layout'
import { VFC } from 'react'

export type Props = {}

export const Home: VFC<Props> = () => {
  return (
    <Layout>
      <Kv />
    </Layout>
  )
}
