// Set up mongoose connection

const mongoose = require('mongoose')
const config = require('dotenv').config()

const mongoDB = process.env.MONGODBURL
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })

const database = mongoose.connection
database.on('error', console.error.bind(console, 'MongoDB connection error: '))
