// simple server
const http = require('http')
const server = http.createServer((req, res) =>{
    console.log("Hit count")
    res.end("Hit count detected")
})

server.listen(8000)