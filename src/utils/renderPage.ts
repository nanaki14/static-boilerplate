import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

export const renderPage = (params: {
  elm: React.ReactElement
  head: React.ReactElement
}) => {
  return `
    <!DOCTYPE html>
    <html lang="ja">
      <head>
        ${renderToStaticMarkup(params.head)}
      </head>
      <body>
        ${renderToStaticMarkup(params.elm)}
      </body>
    </html>
  `
}
