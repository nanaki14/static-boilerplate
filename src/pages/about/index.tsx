import { renderToStaticMarkup } from 'react-dom/server'

const App = () => <div>About React !!</div>

export default () => `
  <!DOCTYPE html>
  <html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
  </head>
  <body>
    ${renderToStaticMarkup(<App />)}
  </body>
  </html>
`
