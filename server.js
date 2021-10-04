const express = require('express')

const app = express()

app.use(express.static('dist'))

const template = `
  <html>
    <head>
      <title>React Fiber</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="bundle.js"></script>
    </body>
  </html>
`

app.get('*', (req, res) => {
  res.send(template)
})

app.listen(3000, () => {
  console.log('http://localhost:3000/ server is running')
})
