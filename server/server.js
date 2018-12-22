

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
// const db = require('./connections/db')
const ApiRouter = require('./routers/ApiRouter')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const port = process.env.PORT || 4000;

const frontEndRoutes = ['/'];
frontEndRoutes.map(route => app.use(route, express.static('build')));

app.use('/api', ApiRouter)

app.listen(port)
console.log('listening on port: '+ port)
