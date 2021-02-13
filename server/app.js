const express = require('express')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000

mongoose.connect('mongodb+srv://Paul:mwm4hADVl6M7UX9g@cluster0.vm2tr.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
    console.log("conneted to mongo yeahh")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/api/auth', authRoutes)


app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})