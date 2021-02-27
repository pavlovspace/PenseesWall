const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const {MONGOURI} = require('./config/keys')
// mongoose.connect('mongodb+srv://Paul:mwm4hADVl6M7UX9g@cluster0.vm2tr.mongodb.net/<dbname>?retryWrites=true&w=majority',{
//     useNewUrlParser:true,
//     useUnifiedTopology: true
// })

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true

})
mongoose.connection.on('connected',()=>{
    console.log("conneted to mongo yeahh")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})

require('./models/user')
require('./models/post')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))


// Если пользователь будет делать запросы (тоесть вводить в поиск запрос профиля или главная страница) ему будет отправляться HTML
if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/build'))// тут мы разворачиваем статический файл HTML и СSS который находится в папке build
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}



app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})