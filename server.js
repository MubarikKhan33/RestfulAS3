const express = require('express')
const productRoute = require('./routes/productRoute')
const connectMongoDB = require('./connection')
const app = express()
const URL = 'mongodb+srv://mubarikfsd41:mubarikhere@mubarikkhan.tepkwoh.mongodb.net/?retryWrites=true&w=majority'
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/products',productRoute)
connectMongoDB(app,PORT,URL)




