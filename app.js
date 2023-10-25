const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const morgan = require('morgan')

const authRoutes = require('./routes/auth')
const analyticRoutes = require('./routes/analytics')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')

const app = express()

const baseUrl = '/api'

app.use(`${baseUrl}/auth`, authRoutes)
app.use(`${baseUrl}/analytics`, analyticRoutes)
app.use(`${baseUrl}/category`, categoryRoutes)
app.use(`${baseUrl}/order`, orderRoutes)
app.use(`${baseUrl}/position`, positionRoutes)

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "deadtests",
    password: "root"
})




module.exports = app