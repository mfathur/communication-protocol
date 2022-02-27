const { response } = require('express')
const express = require ('express')
const { json } = require('express/lib/response')
var socket = require ('socket.io')
// const config = require('./config3')

const app = express()
app.use(express.json())

// pengennya buat config port di sini
var server = app.listen(3002, function(){
    console.log('server is okay')
})

// buat socket
var io = socket(server)

// membuat koneksi socket
io.on('connection', function(){
    console.log (" membuat koneksi ")
})

// penanganan request post data dari pc 2
app.post('/', function(req,res){ 
    
    const data_number1 = req.body.number1
    io.sockets.emit ('data1', data_number1)

    console.log (data_number1)
    res.send('berhasil 200')
    
})

// testing koneksi saja 
app.get('/', function(req,res){
    res.send('tes halo halo, berhasil')
})





