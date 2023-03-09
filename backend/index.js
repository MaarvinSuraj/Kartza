const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const mongoose = require("mongoose")
const authController = require('./controllers/authController')
const productController = require('./controllers/productController')
const uploadController = require('./controllers/uploadController')
const app = express()
app.use(cors({
    origin:"http://localhost:3000"
}))

const bodyParser = require('body-parser')
const PUBLISH_KEY = "pk_test_51MeVyVSC0t5Cx659UnsT429YKEESWXjzLb1zSl2hwbk9PRotV4aOhGXJ1g9ZV0OoNlAnRcIXTzW2lf0fvEJfV45S00JuYTw7kz"
const SECRET_KEY = "sk_test_51MeVyVSC0t5Cx659LaTCdc9JnNY37ghZP0XyGeANGkMI993Y1NhYW1jC0JN5VtNRj9yOfHdzTobpfL6Kjy1q82jf00c70oMpV3"
const stripe = require('stripe')(SECRET_KEY)
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.set("view engine","ejs")

app.listen(process.env.PORT, () => console.log(`Server has been started successfully on Port ${process.env.PORT} `))

app.get('/',(req,res)=>{
    console.log("inside payment function")
    res.render('Home',{
        key:PUBLISH_KEY
    })
})

app.post('/payment',(req,res)=> {
    stripe.customers.create({
        email:req.body.stripeEmail,
        source:req.body.stripeToken,
        name: 'Suraj',
        address: {
            line1:'1C ABC Nagar chennai',
            postal_code: '600100',
            city:'Chennai',
            State: 'Tamil Nadu',
            Country: 'India'
        }
    })
    .then((customer)=>{
        return stripe.charges.create({
            amount: 300,
            description: 'Food Order',
            currency: 'USD',
            customer: customer.id
        })
    })
    .then((charge) => {   
        console.log(charge)
        res.send("success")
    })
    .catch((err) => {
        console.log("Errr !! ",err)
        res.send(error)
    })
})

// connect our db
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL, () => console.log('DB is successfully connected'))

// routes & middlewares
// those two middlewares make req.body accessible, otherwise it would be undefined!!!
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/images', express.static('public/images'))
app.use('/auth', authController)
app.use('/product', productController)
app.use('/upload', uploadController)

// start our server

// server is on port 3000, client is on port 3000,
// we are going to get a cors ERROR!!, but cors() removes that's error