//
const express = require('express')
const mysql = require('mysql2')
const Sequelize = require('sequelize')
const cors = require('cors')
const morgan = require('morgan')
const db = require('./db')
const dotenv = require('dotenv').config();
const passport = require('passport')

const authRoutes = require('./routes/auth')
const questionRoutes = require('./routes/question')
const testRoutes = require('./routes/test')
const excelRoutes = require('./routes/excel')


const app = express()

const baseUrl = '/api'
//

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))
app.use(cors())


app.use(`${baseUrl}/auth`, authRoutes)
app.use(`${baseUrl}/question`, questionRoutes)
app.use(`${baseUrl}/test`, testRoutes)
app.use(`${baseUrl}/excel`, excelRoutes)
//


//


module.exports = app;
module.exports.sequelize = Sequelize;