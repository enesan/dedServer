const express = require('express')
const mysql = require('mysql2')
const Sequelize = require('sequelize')
const cors = require('cors')
const morgan = require('morgan')
const db = require('./db')

const authRoutes = require('./routes/auth')
const questionRoutes = require('./routes/question')
const testRoutes = require('./routes/test')
const excelRoutes = require('./routes/excel')
const {answers} = require("./db");

const app = express()

const baseUrl = '/api'

app.use(`${baseUrl}/auth`, authRoutes)
app.use(`${baseUrl}/question`, questionRoutes)
app.use(`${baseUrl}/test`, testRoutes)
app.use(`${baseUrl}/excel`, excelRoutes)

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))




module.exports = app;
module.exports.sequelize = sequelize;
