const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
            res.end('welcome to    home page')

    }
    if(req.url === '/about'){
        res.end(`<h1>your navigating to the about us</h1>`)
    }

    res.end(
        `<h1>Oooops page not found</h1>
        <a href="/">back to home page</a>`
    )

})

server.listen(5000)