import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const App = () => <div>Use React !!</div>;

export default ({ htmlWebpackPlugin }) => `
  <!DOCTYPE html>
  <html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${htmlWebpackPlugin.options.title}</title>
  </head>
  <body>
    ${renderToStaticMarkup(<App />)}
  </body>
  </html>
`;