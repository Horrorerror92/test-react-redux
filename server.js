const express = require('express')
const path = require('path')
const app = express()

const staticPath = path.join(__dirname, '/build')
app.use(express.static(staticPath))

app.set('port' , process.env.PORT || 3010)

app.listen(app.get('port'), function(){
  console.log('listening...'+ app.get('port') + ' port')
})