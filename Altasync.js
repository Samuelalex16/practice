const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        return res.end('Welcome to the home page')
    }
    if (req.url === '/about') {
        //BLOCKING CODE
        // for (let i = 0; i < 1000; i++) {
        //     for (let j = 0; j < 1000; j++)
        //         console.log(i, j);
        // }
        return res.end("The short history about this page")
    }
    return res.end(`<h1> Oops! </h1> 
            <p > We can 't seem to find the page you are looking for</p> 
            <a href = "/" > back home </a>
                `)
})
server.listen(5000, () => {
    console.log("Listenning on port 5000");
})