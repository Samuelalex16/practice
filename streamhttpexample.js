var http = require('http')
var fs = require('fs')

http.createServer(function(req, res) {
    // const text = fs.readFileSync('./test/big.txt', 'utf-8')
    // return res.end(text)
    const fileStream = fs.createReadStream('./test/big.txt', 'utf-8')
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('error', () => {
        res.end(err)
    })
}).listen(5000)