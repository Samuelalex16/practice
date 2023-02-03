const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        return res.end('Welcome to the home page')
    }
    if (req.url === '/about') {
        return res.end("The short history about this page")
    }
    return res.end(`<h1> Oops! </h1> 
            <p > We can 't seem to find the page you are looking for</p> 
            <a href = "/" > back home </a>
                `)
})
server.listen(5000)