const { json } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex'
const cors = require('cors')

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})


app.use(express.json());
app.use(cors())
const alienRouter = require('./routers/users')
app.use('/user',alienRouter)



app.listen(9000,()=>{
    console.log('server started Running At 9000...')
})