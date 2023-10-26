const express = require('express')
const mysql = require('mysql2')
const Sequelize = require('sequelize')
const cors = require('cors')
const morgan = require('morgan')

const authRoutes = require('./routes/auth')
const analyticRoutes = require('./routes/question')

const app = express()

const baseUrl = '/api'

app.use(`${baseUrl}/auth`, authRoutes)
app.use(`${baseUrl}/analytics`, analyticRoutes)

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

sequelize = new Sequelize(
    'deadtests',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
        define: {
            timestamps: false
        }
    }
);



module.exports = app;
module.exports.sequelize = sequelize;
