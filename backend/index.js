const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const mongoose = require("mongoose")
const authController = require('./controllers/authController')
const productController = require('./controllers/productController')
const uploadController = require('./controllers/uploadController')
const app = express()

// connect our DB
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL, () => console.log('DB connected'))

// routes & middleware
// those two middlewares make req.body accessible, or else it would be undefined!
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/auth', authController)
app.use('/product',productController)
app.use('/images', express.static('public/images'))
app.use('/upload',uploadController)
// app.use('/upload', uploadController)

// start Server
app.listen(process.env.PORT, () => console.log('Server Started'))

// server is on port 5000 client is on port 300