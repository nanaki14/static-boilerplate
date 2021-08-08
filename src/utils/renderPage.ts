import Helmet from 'react-helmet'
import { renderToStaticMarkup } from 'react-dom/server'

export const renderPage = (element) => {
  const markup = renderToStaticMarkup(element)
  const helmet = Helmet.renderStatic()
  const staticHelmet = (data: string) => {
    return data.replace(/data-react-helmet="true"/g, '')
  }

  return `
    <!DOCTYPE html>
    <html lang="ja" ${helmet.htmlAttributes.toString()}>
      <head>
        ${staticHelmet(helmet.title.toString())}
        ${staticHelmet(helmet.meta.toString())}
        ${staticHelmet(helmet.link.toString())}
        ${staticHelmet(helmet.style.toString())}
        ${staticHelmet(helmet.script.toString())}
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        ${markup}
      </body>
    </html>
  `
}
