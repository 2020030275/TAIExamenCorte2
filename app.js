const http = require("http")
const express = require("express")
const ejs = require('ejs')
const bodyparser = require('body-parser')
const router = require('./router/index')
const path = require('path')
const port = 605

const app = express()
app.set('view engine',"ejs")
app.use(express.static(__dirname +'/public'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(router)
app.engine('html', require('ejs').renderFile)



app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname + "/public/error.html")
})

app.listen(port, () => {
    console.log("Iniciando puerto 605")
})