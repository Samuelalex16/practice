var http = require('http')
var fs = require('fs')

http.createServer(function(req, res) {
    const text = fs.readFileSync('./test/big.txt', 'utf-8')
    return res.end(text)
}).listen(5000)