const express = require('express')
const timefutRoute = require('./route/timefut.route')

const app = express()
app.use(express.json())
app.use('/time', timefutRoute)

const PORT = 8087

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
})
