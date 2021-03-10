const path = require('path')
const fs = require('fs')

const listFiles = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((dirent) => {
    return dirent.isFile()
      ? [`${dir}/${dirent.name}`]
      : listFiles(`${dir}/${dirent.name}`)
  })

exports.htmlFiles = () => {
  const pages = listFiles(path.resolve(__dirname, '../src/pages')).map(
    (path) => ({
      path: './src/' + path.match(/src\/(.*)/)[1],
      filename: path.match(/pages\/(.*)/)[1].replace('tsx', 'html'),
    })
  )

  return pages
}
