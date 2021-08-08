import { VFC } from 'react'
import Helmet, { HelmetProps } from 'react-helmet'
import { meta } from '@/constatnts/meta'

export type Props = {
  title?: string
  description?: string
  url?: string
  siteName?: string
  ogImage?: string
  noindex?: boolean
  children?: typeof Helmet
  htmlAttributes?: HelmetProps['htmlAttributes']
  bodyAttributes?: HelmetProps['bodyAttributes']
}

export const Head: VFC<Props> = (props) => {
  return (
    <Helmet
      bodyAttributes={props.bodyAttributes}
      htmlAttributes={props.htmlAttributes}
    >
      <title>{props.title || meta.title}</title>
      <meta
        name="description"
        content={props.description || meta.description}
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      ></meta>
      {props.noindex && <meta name="robots" content="noindex" />}
      {!props.noindex && props.url && <link rel="canonical" href={props.url} />}
      <meta
        property="og:url"
        content={props.url ? `${meta.siteDomain}${props.url}` : meta.url}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={props.title ? `${props.title} | ${meta.title}` : meta.title}
      />
      <meta
        property="og:description"
        content={props.description || meta.description}
      />
      <meta property="og:site_name" content={props.siteName || meta.siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="og:image"
        content={
          props.ogImage ? `${meta.siteDomain}${props.ogImage}` : meta.ogImage
        }
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="ja_JP" />
      {props.children}
    </Helmet>
  )
}
